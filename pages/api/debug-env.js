// pages/api/debug-env.js
export default function handler(req, res) {
  res.status(200).json({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || "MISSING_URL",
    key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      ? "✅ KEY_PRESENT"
      : "❌ MISSING_KEY",
  });
}
