import 'server-only';

/**
 * Escapes special MarkdownV2 characters for safe Telegram messaging
 * Character list: _ * [ ] ( ) ~ ` > # + - = | { } . ! \
 */
export function escapeMarkdown(text: string): string {
  if (!text) return '';
  return text.replace(/([_*\[\]()~`>#+\-=|{}.!\\])/g, '\\$1');
}

export interface TelegramDispatchResult {
  ok: boolean;
  messageId?: number;
  reason?: string;
  error?: string;
}

/**
 * Safely sends an alert or notification to the community Telegram channel.
 * Gracefully handles missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHANNEL_ID without crashing or throwing.
 */
export async function sendTelegramAlert(
  message: string,
  options?: { parseMode?: 'MarkdownV2' | 'HTML'; silent?: boolean }
): Promise<TelegramDispatchResult> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const channelId = process.env.TELEGRAM_CHANNEL_ID || process.env.TELEGRAM_CHAT_ID;

  if (!token || !channelId || token.startsWith('123456:')) {
    console.info('Telegram notification skipped: TELEGRAM_BOT_TOKEN or TELEGRAM_CHANNEL_ID is unset.');
    return { ok: false, reason: 'unconfigured' };
  }

  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: channelId,
        text: message,
        parse_mode: options?.parseMode || 'MarkdownV2',
        disable_notification: options?.silent || false,
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (!res.ok) {
      const errBody = await res.text().catch(() => '');
      console.warn(`Telegram API warning (${res.status}):`, errBody);
      return { ok: false, error: `HTTP ${res.status}: ${errBody}` };
    }

    const data = await res.json();
    return { ok: true, messageId: data.result?.message_id };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn('Telegram dispatch network/unhandled failure caught gracefully:', msg);
    return { ok: false, error: msg };
  }
}

/**
 * Dispatches an alert when a new matrimonial profile is submitted for verification
 */
export async function notifyProfileCreated(p: {
  id?: string;
  displayName: string;
  gender: string;
  district: string;
  mandal: string;
  vocation: string;
  gothra?: string;
}): Promise<TelegramDispatchResult> {
  const safeName = escapeMarkdown(p.displayName);
  const safeGender = escapeMarkdown(p.gender === 'male' ? 'వరుడు (Groom)' : 'వధువు (Bride)');
  const safeDistrict = escapeMarkdown(p.district);
  const safeMandal = escapeMarkdown(p.mandal);
  const safeVocation = escapeMarkdown(p.vocation);
  const safeGothra = escapeMarkdown(p.gothra || 'పరిశీలనలో ఉంది');

  const text = [
    `🔔 *నూతన వధూవరుల నమోదు \\(New Profile Registered\\)*`,
    ``,
    `👤 *పేరు:* ${safeName}`,
    `⚧ *వర్గం:* ${safeGender}`,
    `📍 *ప్రాంతం:* ${safeDistrict} · ${safeMandal}`,
    `🌿 *గోత్రం:* ${safeGothra}`,
    `💼 *వృత్తి:* ${safeVocation}`,
    ``,
    `🔗 [పరిశీలన కొరకు డెస్క్ చూడండి](https://www.nayisamakhya.org/matrimony/nsm-admin)`,
  ].join('\n');

  return sendTelegramAlert(text);
}

/**
 * Dispatches an alert when a profile is verified and active
 */
export async function notifyProfileApproved(p: {
  id: string;
  displayName: string;
  district: string;
  mandal: string;
}): Promise<TelegramDispatchResult> {
  const safeName = escapeMarkdown(p.displayName);
  const safeLocation = escapeMarkdown(`${p.district}, ${p.mandal}`);

  const text = [
    `✨ *సంబంధం ధృవీకరించబడింది \\(Profile Approved\\)*`,
    ``,
    `🌸 *అభ్యర్థి:* ${safeName}`,
    `📍 *నివాసం:* ${safeLocation}`,
    `✅ *స్థితి:* గ్రామ పెద్దలు మరియు మండల సమన్వయకర్తచే ధృవీకరించబడింది`,
    ``,
    `💍 [సంబంధం వివరాలు చూడండి](https://www.nayisamakhya.org/matrimony/discover)`,
  ].join('\n');

  return sendTelegramAlert(text);
}
