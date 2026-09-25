/* Model catalogs: verified live snapshots + clearly labeled user-provided crawl data. */
(function (root, factory) {
  const catalogs = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = catalogs;
  if (root) root.MODEL_CATALOGS = catalogs;
})(typeof window !== "undefined" ? window : null, function () {
  return {
  "zytroapi": {
    "status": "provided",
    "importedDate": "2026-09-25",
    "sourceLabel": "Data crawl unggahan pengguna",
    "models": [
      {
        "id": "claude-fable-5",
        "name": "claude-fable-5"
      },
      {
        "id": "claude-fable-5.1",
        "name": "claude-fable-5.1"
      },
      {
        "id": "claude-haiku-4.5",
        "name": "claude-haiku-4.5"
      },
      {
        "id": "claude-opus-4.6",
        "name": "claude-opus-4.6"
      },
      {
        "id": "claude-opus-4.7",
        "name": "claude-opus-4.7"
      },
      {
        "id": "claude-opus-4.8",
        "name": "claude-opus-4.8"
      },
      {
        "id": "claude-opus-5",
        "name": "claude-opus-5"
      },
      {
        "id": "claude-opus-5.5",
        "name": "claude-opus-5.5"
      },
      {
        "id": "claude-sonnet-4.5",
        "name": "claude-sonnet-4.5"
      },
      {
        "id": "claude-sonnet-4.6",
        "name": "claude-sonnet-4.6"
      },
      {
        "id": "claude-sonnet-5",
        "name": "claude-sonnet-5"
      },
      {
        "id": "deepseek-3.2",
        "name": "deepseek-3.2"
      },
      {
        "id": "deepseek-v3.2",
        "name": "deepseek-v3.2"
      },
      {
        "id": "deepseek-v4-flash",
        "name": "deepseek-v4-flash"
      },
      {
        "id": "deepseek-v4-pro",
        "name": "deepseek-v4-pro"
      },
      {
        "id": "deepseek-v4.1-flash",
        "name": "deepseek-v4.1-flash"
      },
      {
        "id": "gemini-3.1-pro",
        "name": "gemini-3.1-pro"
      },
      {
        "id": "gemini-3.5-flash",
        "name": "gemini-3.5-flash"
      },
      {
        "id": "gemini-3.6-flash",
        "name": "gemini-3.6-flash"
      },
      {
        "id": "gemini-3.7-flash",
        "name": "gemini-3.7-flash"
      },
      {
        "id": "gemini-3.8-flash",
        "name": "gemini-3.8-flash"
      },
      {
        "id": "glm-5",
        "name": "glm-5"
      },
      {
        "id": "glm-5.0-turbo",
        "name": "glm-5.0-turbo"
      },
      {
        "id": "glm-5.1",
        "name": "glm-5.1"
      },
      {
        "id": "glm-5.2",
        "name": "glm-5.2"
      },
      {
        "id": "glm-5.3",
        "name": "glm-5.3"
      },
      {
        "id": "glm-5.3-flash",
        "name": "glm-5.3-flash"
      },
      {
        "id": "glm-5.3-flashx",
        "name": "glm-5.3-flashx"
      },
      {
        "id": "glm-5v-turbo",
        "name": "glm-5v-turbo"
      },
      {
        "id": "gpt-4o",
        "name": "gpt-4o"
      },
      {
        "id": "gpt-5.3-codex",
        "name": "gpt-5.3-codex"
      },
      {
        "id": "gpt-5.5",
        "name": "gpt-5.5"
      },
      {
        "id": "gpt-5.6-luna",
        "name": "gpt-5.6-luna"
      },
      {
        "id": "gpt-5.6-sol",
        "name": "gpt-5.6-sol"
      },
      {
        "id": "gpt-5.6-terra",
        "name": "gpt-5.6-terra"
      },
      {
        "id": "gpt-6-astra",
        "name": "gpt-6-astra"
      },
      {
        "id": "gpt-6-luna",
        "name": "gpt-6-luna"
      },
      {
        "id": "gpt-6-sol",
        "name": "gpt-6-sol"
      },
      {
        "id": "grok-4.3",
        "name": "grok-4.3"
      },
      {
        "id": "grok-4.5",
        "name": "grok-4.5"
      },
      {
        "id": "grok-4.6",
        "name": "grok-4.6"
      },
      {
        "id": "grok-build-0.1",
        "name": "grok-build-0.1"
      },
      {
        "id": "grok-composer-2.5-fast",
        "name": "grok-composer-2.5-fast"
      },
      {
        "id": "hy3",
        "name": "hy3"
      },
      {
        "id": "hy4",
        "name": "hy4"
      },
      {
        "id": "hy4-preview",
        "name": "hy4-preview"
      },
      {
        "id": "mimo-v2.5",
        "name": "mimo-v2.5"
      },
      {
        "id": "mimo-v2.5-pro",
        "name": "mimo-v2.5-pro"
      },
      {
        "id": "minimax-m2.5",
        "name": "minimax-m2.5"
      },
      {
        "id": "minimax-m2.7",
        "name": "minimax-m2.7"
      },
      {
        "id": "minimax-m3",
        "name": "minimax-m3"
      },
      {
        "id": "muse-spark-1.2",
        "name": "muse-spark-1.2"
      },
      {
        "id": "muse-spark-1.3",
        "name": "muse-spark-1.3"
      },
      {
        "id": "qwen-3.5-flash",
        "name": "qwen-3.5-flash"
      },
      {
        "id": "qwen-3.5-plus",
        "name": "qwen-3.5-plus"
      },
      {
        "id": "qwen-3.6-flash",
        "name": "qwen-3.6-flash"
      },
      {
        "id": "qwen-3.6-plus",
        "name": "qwen-3.6-plus"
      },
      {
        "id": "qwen-3.7-flash",
        "name": "qwen-3.7-flash"
      },
      {
        "id": "qwen-3.7-max",
        "name": "qwen-3.7-max"
      },
      {
        "id": "qwen-3.7-plus",
        "name": "qwen-3.7-plus"
      },
      {
        "id": "qwen-3.8-flash",
        "name": "qwen-3.8-flash"
      },
      {
        "id": "qwen-3.8-max",
        "name": "qwen-3.8-max"
      },
      {
        "id": "qwen-3.8-max-0902",
        "name": "qwen-3.8-max-0902"
      },
      {
        "id": "qwen3.8-max",
        "name": "qwen3.8-max"
      }
    ]
  },
  "ruvicode": {
    "status": "verified",
    "observedDate": "2026-09-24",
    "sourceLabel": "Katalog live RuviCode (3 halaman)",
    "sourceUrl": "https://ruvicode.com/models",
    "models": [
      {
        "id": "deepseek-v4-flash-0731",
        "name": "DeepSeek V4 Flash 0731",
        "meta": "Konteks 1.05M"
      },
      {
        "id": "deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "meta": "Konteks 1.05M"
      },
      {
        "id": "deepseek-v4.1-flash",
        "name": "DeepSeek V4.1 Flash",
        "meta": "Konteks 1M"
      },
      {
        "id": "glm-5.3-flash",
        "name": "GLM 5.3 Flash",
        "meta": "Konteks 1M"
      },
      {
        "id": "gpt-5.6-luna",
        "name": "GPT 5.6 Luna",
        "meta": "Konteks 1.05M"
      },
      {
        "id": "minimax-m2.5",
        "name": "Minimax M2.5",
        "meta": "Konteks 205K"
      },
      {
        "id": "minimax-m2.7",
        "name": "Minimax M2.7",
        "meta": "Konteks 205K"
      },
      {
        "id": "deepseek-v4-pro-0813",
        "name": "DeepSeek V4 Pro 0813",
        "meta": "Konteks 1M"
      },
      {
        "id": "kimi-k2.7-code",
        "name": "Kimi K2.7 Code",
        "meta": "Konteks 256K"
      },
      {
        "id": "glm-5.2",
        "name": "GLM 5.2",
        "meta": "Konteks 1M"
      },
      {
        "id": "gpt-5.6-luna-pro",
        "name": "GPT 5.6 Luna Pro",
        "meta": "Konteks 1.05M"
      },
      {
        "id": "gemini-3.8-flash",
        "name": "Gemini 3.8 Flash",
        "meta": "Konteks 1.05M"
      },
      {
        "id": "gemini-3.7-flash",
        "name": "Gemini 3.7 Flash",
        "meta": "Konteks 1.05M"
      },
      {
        "id": "kimi-k2.6",
        "name": "Kimi K2.6",
        "meta": "Konteks 256K"
      },
      {
        "id": "glm-5.3",
        "name": "GLM 5.3",
        "meta": "Konteks 1M"
      },
      {
        "id": "gpt-5.4-mini",
        "name": "GPT 5.4 Mini",
        "meta": "Konteks 400K"
      },
      {
        "id": "kimi-k2.5",
        "name": "Kimi K2.5",
        "meta": "Konteks 256K"
      },
      {
        "id": "deepseek-v4-pro",
        "name": "DeepSeek V4 Pro",
        "meta": "Konteks 1.05M"
      },
      {
        "id": "gemini-3-5-flash",
        "name": "Gemini 3 5 Flash",
        "meta": "Konteks 1.05M"
      },
      {
        "id": "glm-5.1",
        "name": "GLM 5.1",
        "meta": "Konteks 200K"
      },
      {
        "id": "claude-haiku-4.5",
        "name": "Claude Haiku 4.5",
        "meta": "Konteks 200K"
      },
      {
        "id": "gpt-5.6-terra",
        "name": "GPT 5.6 Terra",
        "meta": "Konteks 1.05M"
      },
      {
        "id": "grok-4.5",
        "name": "Grok 4.5",
        "meta": "Konteks 500K"
      },
      {
        "id": "gpt-5.6-sol",
        "name": "GPT 5.6 Sol",
        "meta": "Konteks 1.05M"
      },
      {
        "id": "gemini-3.1-pro-preview",
        "name": "Gemini 3.1 Pro Preview",
        "meta": "Konteks 1.05M"
      },
      {
        "id": "gpt-5.4",
        "name": "GPT 5.4",
        "meta": "Konteks 1.05M"
      },
      {
        "id": "claude-sonnet-5",
        "name": "Claude Sonnet 5",
        "meta": "Konteks 1M"
      },
      {
        "id": "kimi-k3",
        "name": "Kimi K3",
        "meta": "Konteks 1M"
      },
      {
        "id": "grok-4.3",
        "name": "Grok 4.3",
        "meta": "Konteks 1M"
      },
      {
        "id": "grok-4.6",
        "name": "Grok 4.6",
        "meta": "Konteks 500K"
      },
      {
        "id": "gpt-5.6-terra-pro",
        "name": "GPT 5.6 Terra Pro",
        "meta": "Konteks 1.05M"
      },
      {
        "id": "claude-sonnet-4.5",
        "name": "Claude Sonnet 4.5",
        "meta": "Konteks 200K"
      },
      {
        "id": "claude-opus-4.6",
        "name": "Claude Opus 4.6",
        "meta": "Konteks 1M"
      },
      {
        "id": "claude-opus-4.7",
        "name": "Claude Opus 4.7",
        "meta": "Konteks 1M"
      },
      {
        "id": "claude-opus-5",
        "name": "Claude Opus 5",
        "meta": "Konteks 1M"
      },
      {
        "id": "gpt-5.6-sol-pro",
        "name": "GPT 5.6 Sol Pro",
        "meta": "Konteks 1.05M"
      },
      {
        "id": "gpt-5.5",
        "name": "GPT 5.5",
        "meta": "Konteks 1.05M"
      },
      {
        "id": "claude-opus-4.8",
        "name": "Claude Opus 4.8",
        "meta": "Konteks 1M"
      },
      {
        "id": "gpt-6-astra",
        "name": "GPT 6 Astra",
        "meta": "Konteks 1.05M"
      },
      {
        "id": "claude-opus-4.5",
        "name": "Claude Opus 4.5",
        "meta": "Konteks 200K"
      },
      {
        "id": "claude-fable-5",
        "name": "Claude Fable 5",
        "meta": "Konteks 1M"
      },
      {
        "id": "claude-fable-5.1",
        "name": "Claude Fable 5.1",
        "meta": "Konteks 1M"
      }
    ]
  },
  "modelrouter": {
    "status": "provided-partial",
    "importedDate": "2026-09-25",
    "sourceLabel": "Data crawl unggahan pengguna",
    "models": [
      {
        "id": "claude",
        "name": "claude"
      },
      {
        "id": "claude-fable-5",
        "name": "claude-fable-5"
      },
      {
        "id": "claude-fable-5.1",
        "name": "claude-fable-5.1"
      },
      {
        "id": "claude-haiku-4.5",
        "name": "claude-haiku-4.5"
      },
      {
        "id": "claude-opus-4.8",
        "name": "claude-opus-4.8"
      },
      {
        "id": "claude-opus-5",
        "name": "claude-opus-5"
      },
      {
        "id": "claude-opus-5.5",
        "name": "claude-opus-5.5"
      },
      {
        "id": "claude-sonnet-4.6",
        "name": "claude-sonnet-4.6"
      },
      {
        "id": "claude-sonnet-5",
        "name": "claude-sonnet-5"
      },
      {
        "id": "deepseek",
        "name": "deepseek"
      },
      {
        "id": "deepseek-v4-pro",
        "name": "deepseek-v4-pro"
      },
      {
        "id": "deepseek-v4.1-flash",
        "name": "deepseek-v4.1-flash"
      },
      {
        "id": "gemini",
        "name": "gemini"
      },
      {
        "id": "gemini-3-flash",
        "name": "gemini-3-flash"
      },
      {
        "id": "gemini-3.1-flash-image",
        "name": "gemini-3.1-flash-image"
      },
      {
        "id": "gemini-3.1-pro",
        "name": "gemini-3.1-pro"
      },
      {
        "id": "gemini-3.5-flash",
        "name": "gemini-3.5-flash"
      },
      {
        "id": "gemini-3.6-flash",
        "name": "gemini-3.6-flash"
      },
      {
        "id": "gemini-3.7-flash",
        "name": "gemini-3.7-flash"
      },
      {
        "id": "gemini-3.8-flash",
        "name": "gemini-3.8-flash"
      },
      {
        "id": "glm",
        "name": "glm"
      },
      {
        "id": "glm-5.2",
        "name": "glm-5.2"
      },
      {
        "id": "glm-5.3",
        "name": "glm-5.3"
      },
      {
        "id": "glm-5.3-flash",
        "name": "glm-5.3-flash"
      },
      {
        "id": "gpt-4.1",
        "name": "gpt-4.1"
      },
      {
        "id": "gpt-4.1-mini",
        "name": "gpt-4.1-mini"
      },
      {
        "id": "gpt-4.1-nano",
        "name": "gpt-4.1-nano"
      },
      {
        "id": "gpt-4o",
        "name": "gpt-4o"
      },
      {
        "id": "gpt-4o-mini",
        "name": "gpt-4o-mini"
      },
      {
        "id": "gpt-5",
        "name": "gpt-5"
      },
      {
        "id": "gpt-5-mini",
        "name": "gpt-5-mini"
      },
      {
        "id": "gpt-5-nano",
        "name": "gpt-5-nano"
      },
      {
        "id": "gpt-5.4",
        "name": "gpt-5.4"
      },
      {
        "id": "gpt-5.4-mini",
        "name": "gpt-5.4-mini"
      },
      {
        "id": "gpt-5.4-nano",
        "name": "gpt-5.4-nano"
      },
      {
        "id": "gpt-5.6",
        "name": "gpt-5.6"
      },
      {
        "id": "gpt-5.6-luna",
        "name": "gpt-5.6-luna"
      },
      {
        "id": "gpt-5.6-sol",
        "name": "gpt-5.6-sol"
      },
      {
        "id": "gpt-5.6-terra",
        "name": "gpt-5.6-terra"
      },
      {
        "id": "gpt-6",
        "name": "gpt-6"
      },
      {
        "id": "gpt-6-astra",
        "name": "gpt-6-astra"
      },
      {
        "id": "gpt-6-luna",
        "name": "gpt-6-luna"
      },
      {
        "id": "gpt-6-luna-pro",
        "name": "gpt-6-luna-pro"
      },
      {
        "id": "gpt-6-sol",
        "name": "gpt-6-sol"
      },
      {
        "id": "grok-4.7",
        "name": "grok-4.7"
      },
      {
        "id": "hy3",
        "name": "hy3"
      },
      {
        "id": "hy4-preview",
        "name": "hy4-preview"
      },
      {
        "id": "mimo-v2.5",
        "name": "mimo-v2.5"
      },
      {
        "id": "mimo-v2.6-flash",
        "name": "mimo-v2.6-flash"
      },
      {
        "id": "mimo-v2.6-pro",
        "name": "mimo-v2.6-pro"
      },
      {
        "id": "muse-spark-1.2-contributor",
        "name": "muse-spark-1.2-contributor"
      },
      {
        "id": "muse-spark-1.3-contributor",
        "name": "muse-spark-1.3-contributor"
      },
      {
        "id": "qwen",
        "name": "qwen"
      },
      {
        "id": "qwen3.8-flash",
        "name": "qwen3.8-flash"
      },
      {
        "id": "qwen3.8-max-0902",
        "name": "qwen3.8-max-0902"
      }
    ]
  },
  "tokenkoding": {
    "status": "verified",
    "observedDate": "2026-09-24",
    "sourceLabel": "Endpoint pricing publik TokenKoding",
    "sourceUrl": "https://tokenkoding.id/harga",
    "models": [
      {
        "id": "deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "meta": "Konteks 1,048,560 token · hemat"
      },
      {
        "id": "gemini-2.5-flash-lite",
        "name": "Gemini 2.5 Flash Lite",
        "meta": "Konteks 1,048,576 token · hemat"
      },
      {
        "id": "gemini-3.5-flash-lite",
        "name": "Gemini 3.5 Flash Lite",
        "meta": "Konteks 1,048,576 token · hemat"
      },
      {
        "id": "glm-5.3-flash",
        "name": "GLM-5.3 Flash",
        "meta": "Konteks 1,048,560 token · hemat"
      },
      {
        "id": "gpt-5-nano",
        "name": "GPT-5 Nano",
        "meta": "Konteks 400,000 token · hemat"
      },
      {
        "id": "ling-3.0-flash",
        "name": "Ling 3.0 Flash",
        "meta": "Konteks 262,144 token · hemat"
      },
      {
        "id": "llama-4-scout",
        "name": "Llama 4 Scout",
        "meta": "Konteks 1,310,720 token · hemat"
      },
      {
        "id": "magistral-small",
        "name": "Magistral Small",
        "meta": "Konteks 262,144 token · hemat"
      },
      {
        "id": "ministral-14b",
        "name": "Ministral 14B",
        "meta": "Konteks 262,144 token · hemat"
      },
      {
        "id": "ministral-3b",
        "name": "Ministral 3B",
        "meta": "Konteks 131,072 token · hemat"
      },
      {
        "id": "ministral-8b",
        "name": "Ministral 8B",
        "meta": "Konteks 262,144 token · hemat"
      },
      {
        "id": "mistral-small",
        "name": "Mistral Small",
        "meta": "Konteks 262,144 token · hemat"
      },
      {
        "id": "nemotron-3-super-120b",
        "name": "Nemotron 3 Super 120B",
        "meta": "Konteks 1,000,000 token · hemat"
      },
      {
        "id": "qwen3.5-397b-fast",
        "name": "Qwen3.5 397B Fast",
        "meta": "Konteks 262,128 token · hemat"
      },
      {
        "id": "qwen3.6-35b-fast",
        "name": "Qwen3.6 35B Fast",
        "meta": "Konteks 131,056 token · hemat"
      },
      {
        "id": "voxtral-small",
        "name": "Voxtral Small",
        "meta": "Konteks 32,768 token · hemat"
      },
      {
        "id": "claude-haiku-4.5",
        "name": "Claude Haiku 4.5",
        "meta": "Konteks 200,000 token · menengah"
      },
      {
        "id": "codestral",
        "name": "Codestral",
        "meta": "Konteks 256,000 token · menengah"
      },
      {
        "id": "devstral",
        "name": "Devstral",
        "meta": "Konteks 262,144 token · menengah"
      },
      {
        "id": "devstral-medium",
        "name": "Devstral Medium",
        "meta": "Konteks 262,144 token · menengah"
      },
      {
        "id": "gemini-3.7-flash",
        "name": "Gemini 3.7 Flash",
        "meta": "Konteks 1,048,576 token · menengah"
      },
      {
        "id": "glm-5.2",
        "name": "GLM-5.2",
        "meta": "Konteks 1,048,560 token · menengah"
      },
      {
        "id": "glm-5.2-fast",
        "name": "GLM-5.2 Fast",
        "meta": "Konteks 1,048,560 token · menengah"
      },
      {
        "id": "glm-5.2-short",
        "name": "GLM-5.2 Short",
        "meta": "Konteks 199,984 token · menengah"
      },
      {
        "id": "glm-5.2-short-fast",
        "name": "GLM-5.2 Short Fast",
        "meta": "Konteks 199,984 token · menengah"
      },
      {
        "id": "gpt-5-mini",
        "name": "GPT-5 Mini",
        "meta": "Konteks 400,000 token · menengah"
      },
      {
        "id": "gpt-5.1-codex-mini",
        "name": "GPT-5.1 Codex Mini",
        "meta": "Konteks 400,000 token · menengah"
      },
      {
        "id": "gpt-5.6-luna",
        "name": "GPT-5.6 Luna",
        "meta": "Konteks 1,050,000 token · menengah"
      },
      {
        "id": "llama-4-maverick",
        "name": "Llama 4 Maverick",
        "meta": "Konteks 1,048,576 token · menengah"
      },
      {
        "id": "magistral-medium",
        "name": "Magistral Medium",
        "meta": "Konteks 262,144 token · menengah"
      },
      {
        "id": "minimax-m3",
        "name": "MiniMax M3",
        "meta": "Konteks 1,048,576 token · menengah"
      },
      {
        "id": "mistral-medium",
        "name": "Mistral Medium",
        "meta": "Konteks 262,144 token · menengah"
      },
      {
        "id": "mistral-vibe-cli",
        "name": "Mistral Vibe CLI",
        "meta": "Konteks 262,144 token · menengah"
      },
      {
        "id": "qwen3-coder-plus",
        "name": "Qwen3 Coder Plus",
        "meta": "Konteks 1,000,000 token · menengah"
      },
      {
        "id": "qwen3.5-397b",
        "name": "Qwen3.5 397B",
        "meta": "Konteks 262,128 token · menengah"
      },
      {
        "id": "qwen3.7-plus",
        "name": "Qwen3.7 Plus",
        "meta": "Konteks 1,000,000 token · menengah"
      },
      {
        "id": "qwen3.8-27b",
        "name": "Qwen3.8 27B",
        "meta": "Konteks 262,128 token · menengah"
      },
      {
        "id": "seed-2.0-code",
        "name": "Seed 2.0 Code",
        "meta": "Konteks 262,144 token · menengah"
      },
      {
        "id": "claude-opus-5",
        "name": "Claude Opus 5",
        "meta": "Konteks 1,000,000 token · premium"
      },
      {
        "id": "claude-sonnet-5",
        "name": "Claude Sonnet 5",
        "meta": "Konteks 1,000,000 token · premium"
      },
      {
        "id": "gemini-3.1-pro",
        "name": "Gemini 3.1 Pro",
        "meta": "Konteks 1,048,576 token · premium"
      },
      {
        "id": "gpt-5.5",
        "name": "GPT-5.5",
        "meta": "Konteks 1,050,000 token · premium"
      },
      {
        "id": "gpt-5.6-terra",
        "name": "GPT-5.6 Terra",
        "meta": "Konteks 1,050,000 token · premium"
      },
      {
        "id": "grok-4.3",
        "name": "Grok 4.3",
        "meta": "Konteks 1,000,000 token · premium"
      },
      {
        "id": "grok-4.6",
        "name": "Grok 4.6",
        "meta": "Konteks 500,000 token · premium"
      },
      {
        "id": "kimi-k3",
        "name": "Kimi K3",
        "meta": "Konteks 262,128 token · premium"
      }
    ]
  },
  "kelontongai": {
    "status": "provided",
    "importedDate": "2026-09-25",
    "sourceLabel": "Data crawl unggahan pengguna",
    "models": [
      {
        "id": "claude",
        "name": "claude"
      },
      {
        "id": "claude-opus-4.8",
        "name": "claude-opus-4.8"
      },
      {
        "id": "claude-opus-5",
        "name": "claude-opus-5"
      },
      {
        "id": "claude-sonnet-5",
        "name": "claude-sonnet-5"
      },
      {
        "id": "deepseek",
        "name": "deepseek"
      },
      {
        "id": "deepseek-v4-flash",
        "name": "deepseek-v4-flash"
      },
      {
        "id": "deepseek-v4-flash-0731",
        "name": "deepseek-v4-flash-0731"
      },
      {
        "id": "deepseek-v4-flash-vision-exp",
        "name": "deepseek-v4-flash-vision-exp"
      },
      {
        "id": "deepseek-v4-pro",
        "name": "deepseek-v4-pro"
      },
      {
        "id": "deepseek-v4-pro-0813",
        "name": "deepseek-v4-pro-0813"
      },
      {
        "id": "deepseek-v4.1-flash",
        "name": "deepseek-v4.1-flash"
      },
      {
        "id": "gemini",
        "name": "gemini"
      },
      {
        "id": "gemini-3.1-pro",
        "name": "gemini-3.1-pro"
      },
      {
        "id": "gemini-3.6-flash",
        "name": "gemini-3.6-flash"
      },
      {
        "id": "gemini-3.7-flash",
        "name": "gemini-3.7-flash"
      },
      {
        "id": "gemini-3.8-flash",
        "name": "gemini-3.8-flash"
      },
      {
        "id": "glm",
        "name": "glm"
      },
      {
        "id": "glm-5.2",
        "name": "glm-5.2"
      },
      {
        "id": "glm-5.3",
        "name": "glm-5.3"
      },
      {
        "id": "glm-5.3-flash",
        "name": "glm-5.3-flash"
      },
      {
        "id": "gpt-5.6-luna",
        "name": "gpt-5.6-luna"
      },
      {
        "id": "gpt-5.6-sol",
        "name": "gpt-5.6-sol"
      },
      {
        "id": "gpt-5.6-terra",
        "name": "gpt-5.6-terra"
      },
      {
        "id": "gpt-6-astra",
        "name": "gpt-6-astra"
      },
      {
        "id": "gpt-6-luna",
        "name": "gpt-6-luna"
      },
      {
        "id": "gpt-6-sol",
        "name": "gpt-6-sol"
      },
      {
        "id": "grok-4.7",
        "name": "grok-4.7"
      },
      {
        "id": "hy4",
        "name": "hy4"
      },
      {
        "id": "mimo-v2.5",
        "name": "mimo-v2.5"
      },
      {
        "id": "mimo-v2.6-flash",
        "name": "mimo-v2.6-flash"
      },
      {
        "id": "mimo-v2.6-pro",
        "name": "mimo-v2.6-pro"
      },
      {
        "id": "minimax",
        "name": "minimax"
      },
      {
        "id": "minimax-m3",
        "name": "minimax-m3"
      },
      {
        "id": "muse-spark-1.2",
        "name": "muse-spark-1.2"
      },
      {
        "id": "qwen",
        "name": "qwen"
      },
      {
        "id": "qwen3.8-max",
        "name": "qwen3.8-max"
      }
    ]
  },
  "oaoclipora": {
    "status": "provided-partial",
    "importedDate": "2026-09-25",
    "sourceLabel": "Data crawl unggahan pengguna",
    "models": [
      {
        "id": "claude-opus-5",
        "name": "claude-opus-5"
      }
    ]
  },
  "dahono": {
    "status": "provided-partial",
    "importedDate": "2026-09-25",
    "sourceLabel": "Data crawl unggahan pengguna",
    "models": [
      {
        "id": "claude-sonnet-5",
        "name": "claude-sonnet-5"
      },
      {
        "id": "deepseek",
        "name": "deepseek"
      },
      {
        "id": "deepseek-r1-distill-qwen-32b",
        "name": "deepseek-r1-distill-qwen-32b"
      },
      {
        "id": "deepseek-v3.2-flash-netra",
        "name": "deepseek-v3.2-flash-netra"
      },
      {
        "id": "deepseek-v4-flash-0731-netra",
        "name": "deepseek-v4-flash-0731-netra"
      },
      {
        "id": "deepseek-v4.1-flash-netra",
        "name": "deepseek-v4.1-flash-netra"
      },
      {
        "id": "gemini-3.1-pro",
        "name": "gemini-3.1-pro"
      },
      {
        "id": "glm",
        "name": "glm"
      },
      {
        "id": "gpt-6-astra",
        "name": "gpt-6-astra"
      },
      {
        "id": "qwen-2.5-coder-32b-instruct",
        "name": "qwen-2.5-coder-32b-instruct"
      },
      {
        "id": "qwen3.7-max",
        "name": "qwen3.7-max"
      }
    ]
  },
  "dezgo": {
    "status": "verified",
    "observedDate": "2026-09-24",
    "sourceLabel": "Dezgo API v3.152",
    "sourceUrl": "https://api.dezgo.com/info",
    "models": [
      {
        "id": "stablediffusion_1_5",
        "name": "Stable Diffusion 1.5"
      },
      {
        "id": "stablediffusion_1_4",
        "name": "Stable Diffusion 1.4"
      },
      {
        "id": "stablediffusion_2_0_512px",
        "name": "Stable Diffusion 2.0 (512px)"
      },
      {
        "id": "stablediffusion_2_0_768px",
        "name": "Stable Diffusion 2.0 (768px)"
      },
      {
        "id": "stablediffusion_2_1_512px",
        "name": "Stable Diffusion 2.1 (512px)"
      },
      {
        "id": "stablediffusion_2_1_768px",
        "name": "Stable Diffusion 2.1 (768px)"
      },
      {
        "id": "waifudiffusion_1_3",
        "name": "Waifu Diffusion 1.3"
      },
      {
        "id": "anything_3_0",
        "name": "Anything 3.0"
      },
      {
        "id": "trinart_2_0",
        "name": "Trinart 2.0"
      },
      {
        "id": "openjourney",
        "name": "OpenJourney"
      },
      {
        "id": "synthwavepunk_v2",
        "name": "Synthwavepunk v2"
      },
      {
        "id": "redshift_diffusion",
        "name": "Redshift Diffusion"
      },
      {
        "id": "analog_diffusion",
        "name": "Analog Diffusion"
      },
      {
        "id": "disco_diffusion_style",
        "name": "Disco Diffusion Style"
      },
      {
        "id": "iconsmi_appiconsmodelforsd",
        "name": "IconsMI App icons"
      },
      {
        "id": "lowpoly_world",
        "name": "Lowpoly World"
      },
      {
        "id": "vintedois_diffusion_v0_1",
        "name": "Vintedois Diffusion"
      },
      {
        "id": "stablediffusion_inpaint_1",
        "name": "Stable Diffusion Inpaint 1"
      },
      {
        "id": "stablediffusion_inpaint_2",
        "name": "Stable Diffusion Inpaint 2"
      },
      {
        "id": "epic_diffusion_1_1",
        "name": "Epîc Diffusion 1.1"
      },
      {
        "id": "deliberate",
        "name": "Deliberate 1"
      },
      {
        "id": "dreamshaper",
        "name": "DreamShaper 2.52"
      },
      {
        "id": "realistic_vision_1_3",
        "name": "Realistic Vision 1.3"
      },
      {
        "id": "pastel_mix",
        "name": "Pastel Mix"
      },
      {
        "id": "anything_4_0",
        "name": "Anything 4.0"
      },
      {
        "id": "waifudiffusion_1_4",
        "name": "Waifu Diffusion 1.4"
      },
      {
        "id": "eimis_anime_diffusion_1",
        "name": "Eimis Anime Diffusion"
      },
      {
        "id": "redshift_diffusion_768px",
        "name": "Redshift Diffusion (768px)"
      },
      {
        "id": "foto_assisted_diffusion",
        "name": "Foto Assisted Diffusion"
      },
      {
        "id": "portrait_plus",
        "name": "Portrait Plus"
      },
      {
        "id": "papercut",
        "name": "Papercut"
      },
      {
        "id": "openjourney_2",
        "name": "OpenJourney v2"
      },
      {
        "id": "double_exposure_diffusion",
        "name": "Double Exposure Diffusion"
      },
      {
        "id": "openniji",
        "name": "OpenNiji"
      },
      {
        "id": "blood_orange_mix",
        "name": "BloodOrangeMix"
      },
      {
        "id": "abyss_orange_mix_2",
        "name": "AbyssOrangeMix 2"
      },
      {
        "id": "ely_orange_mix",
        "name": "ElyOrangeMix"
      },
      {
        "id": "basil_mix",
        "name": "Basil Mix"
      },
      {
        "id": "inkpunk_diffusion",
        "name": "Inkpunk Diffusion"
      },
      {
        "id": "epic_diffusion_1",
        "name": "Epîc Diffusion 1.0"
      },
      {
        "id": "future_diffusion",
        "name": "Future Diffusion"
      },
      {
        "id": "hasdx",
        "name": "HASDX"
      },
      {
        "id": "steampunk_diffusion",
        "name": "Steampunk Diffusion"
      },
      {
        "id": "emoji_diffusion",
        "name": "Emoji Diffusion"
      },
      {
        "id": "vectorartz_diffusion",
        "name": "Vectorartz Diffusion"
      },
      {
        "id": "texture_diffusion",
        "name": "Texture Diffusion"
      },
      {
        "id": "vox_2",
        "name": "Vox 2"
      },
      {
        "id": "paint_journey_2_768px",
        "name": "Paint Journey 2"
      },
      {
        "id": "stable_diffusion_papercut",
        "name": "Stable Diffusion PaperCut"
      },
      {
        "id": "stable_diffusion_voxelart",
        "name": "Stable Diffusion VoxelArt"
      },
      {
        "id": "stable_diffusion_fluidart",
        "name": "Stable Diffusion FluidArt"
      },
      {
        "id": "something_2",
        "name": "Something 2"
      },
      {
        "id": "tshirt_diffusion",
        "name": "T-shirt Diffusion"
      },
      {
        "id": "duchaiten_darkside",
        "name": "DucHaitenDarkside"
      },
      {
        "id": "dh_classicanime",
        "name": "DH ClassicAnime"
      },
      {
        "id": "duchaiten_dreamworld",
        "name": "DucHaitenDreamWorld"
      },
      {
        "id": "duchaiten_anime",
        "name": "DucHaitenAnime"
      },
      {
        "id": "anything_5_0",
        "name": "Anything 5.0"
      },
      {
        "id": "cyberrealistic_1_3",
        "name": "CyberRealistic 1.3"
      },
      {
        "id": "instruct_pix2pix",
        "name": "Instruct-Pix2Pix"
      },
      {
        "id": "deliberate_2",
        "name": "Deliberate 2"
      },
      {
        "id": "dreamshaper_5",
        "name": "DreamShaper 5"
      },
      {
        "id": "dreamshaper_6",
        "name": "DreamShaper 6"
      },
      {
        "id": "absolute_reality_1",
        "name": "AbsoluteReality 1.0"
      },
      {
        "id": "cyberrealistic_3_1",
        "name": "CyberRealistic 3.1"
      },
      {
        "id": "icbinp",
        "name": "ICBINP"
      },
      {
        "id": "dreamshaper_7",
        "name": "DreamShaper 7"
      },
      {
        "id": "absolute_reality_1_6",
        "name": "AbsoluteReality 1.6"
      },
      {
        "id": "nightmareshaper",
        "name": "NightmareShaper"
      },
      {
        "id": "sdxl_1024px",
        "name": "Stable Diffusion XL"
      },
      {
        "id": "dreamshaperxl_1024px",
        "name": "DreamShaper XL"
      },
      {
        "id": "dreamshaper_8",
        "name": "DreamShaper 8"
      },
      {
        "id": "absolute_reality_1_8_1",
        "name": "AbsoluteReality 1.8.1"
      },
      {
        "id": "anylora",
        "name": "AnyLora"
      },
      {
        "id": "kidsmix",
        "name": "KidsMix"
      },
      {
        "id": "dreamshaper_8_inpaint",
        "name": "DreamShaper 8 Inpaint"
      },
      {
        "id": "absolute_reality_1_8_1_inpaint",
        "name": "AbsoluteReality 1.8.1 Inpaint"
      },
      {
        "id": "juggernautxl_1024px",
        "name": "JuggernautXL 5.0"
      },
      {
        "id": "cyberrealistic_3_3",
        "name": "CyberRealistic 3.3"
      },
      {
        "id": "icbinp_seco",
        "name": "ICBINP SECO"
      },
      {
        "id": "realistic_vision_5_1",
        "name": "Realistic Vision 5.1"
      },
      {
        "id": "rpg_5",
        "name": "RPG 5"
      },
      {
        "id": "toonify_2",
        "name": "Toonify 2"
      },
      {
        "id": "dreamix_1",
        "name": "Dreamix 1"
      },
      {
        "id": "cyberrealistic_3_3_inpaint",
        "name": "CyberRealistic 3.3 Inpaint"
      },
      {
        "id": "icbinp_seco_inpaint",
        "name": "ICBINP SECO Inpaint"
      },
      {
        "id": "realistic_vision_5_1_inpaint",
        "name": "Realistic Vision 5.1 Inpaint"
      },
      {
        "id": "anything_4_5_inpaint",
        "name": "Anything 4.5 Inpaint"
      },
      {
        "id": "furrytoonmix",
        "name": "FurryToonMix"
      },
      {
        "id": "tshirtdesignredmond_1024px",
        "name": "Tshirt Design Redmond"
      },
      {
        "id": "juggernautxl_rundiffusion_8_1024px",
        "name": "JuggernautXL+RunDiffusion 8.0"
      },
      {
        "id": "bluepencilxl_1024px",
        "name": "BluePencilXL 3.1.0"
      },
      {
        "id": "realcartoon3d_13",
        "name": "RealCartoon3D 13"
      },
      {
        "id": "analogmadness_7",
        "name": "Analog Madness 7"
      },
      {
        "id": "yesmix_4",
        "name": "YesMix 4"
      },
      {
        "id": "realdream_12",
        "name": "RealDream 12"
      },
      {
        "id": "realcartoonanime_10",
        "name": "RealCartoonAnime 10"
      },
      {
        "id": "juggernautxl_9_lightning_1024px",
        "name": "JuggernautXL 9 Lightning"
      },
      {
        "id": "dreamshaperxl_lightning_1024px",
        "name": "DreamshaperXL Lightning"
      },
      {
        "id": "envy_starlight_xl_01_lightning_1024px",
        "name": "Envy Starlight XL 01 Lightning"
      },
      {
        "id": "juggernaut_reborn",
        "name": "Juggernaut Reborn"
      },
      {
        "id": "0001softrealistic_v187",
        "name": "0001SoftRealistic v187"
      },
      {
        "id": "indigo_furry_mix_v120_hybrid",
        "name": "Indigo Furry mix v120 hybrid"
      },
      {
        "id": "ghostmix_v2",
        "name": "GhostMix v2"
      },
      {
        "id": "dark_sushi_mix_v2_25d",
        "name": "Dark Sushi Mix v2.25D"
      },
      {
        "id": "arthemy_comics_gt_beta",
        "name": "Arthemy Comics GT "
      },
      {
        "id": "art_universe_v8",
        "name": "Art Universe v8"
      },
      {
        "id": "ponyxl_6",
        "name": "PurpleSmart.ai’s Pony Diffusion v6 XL"
      },
      {
        "id": "ponyxl_6_turbo_dpo",
        "name": "PurpleSmart.ai’s Pony Diffusion v6 XL Turbo DPO"
      },
      {
        "id": "juggernautxl_10_hyper",
        "name": "JuggernautXL 10 Hyper"
      },
      {
        "id": "flux_1_schnell",
        "name": "Flux Schnell"
      },
      {
        "id": "juggernautxl_x_inpaint_1024px",
        "name": "JuggernautXL 10 Inpainting"
      },
      {
        "id": "illustrious_perfect_deliberate_1024px",
        "name": "Illustrious Perfect Deliberate"
      },
      {
        "id": "illustrious_hassaku_xl_1024px",
        "name": "Illustrious Hassaku XL"
      }
    ],
    "groups": [
      {
        "key": "sd1",
        "name": "Stable Diffusion 1.x & finetune (SD1)",
        "models": [
          {
            "id": "stablediffusion_1_5",
            "name": "Stable Diffusion 1.5"
          },
          {
            "id": "stablediffusion_1_4",
            "name": "Stable Diffusion 1.4"
          },
          {
            "id": "waifudiffusion_1_3",
            "name": "Waifu Diffusion 1.3"
          },
          {
            "id": "anything_3_0",
            "name": "Anything 3.0"
          },
          {
            "id": "trinart_2_0",
            "name": "Trinart 2.0"
          },
          {
            "id": "openjourney",
            "name": "OpenJourney"
          },
          {
            "id": "synthwavepunk_v2",
            "name": "Synthwavepunk v2"
          },
          {
            "id": "redshift_diffusion",
            "name": "Redshift Diffusion"
          },
          {
            "id": "analog_diffusion",
            "name": "Analog Diffusion"
          },
          {
            "id": "disco_diffusion_style",
            "name": "Disco Diffusion Style"
          },
          {
            "id": "iconsmi_appiconsmodelforsd",
            "name": "IconsMI App icons"
          },
          {
            "id": "lowpoly_world",
            "name": "Lowpoly World"
          },
          {
            "id": "vintedois_diffusion_v0_1",
            "name": "Vintedois Diffusion"
          },
          {
            "id": "stablediffusion_inpaint_1",
            "name": "Stable Diffusion Inpaint 1"
          },
          {
            "id": "epic_diffusion_1_1",
            "name": "Epîc Diffusion 1.1"
          },
          {
            "id": "deliberate",
            "name": "Deliberate 1"
          },
          {
            "id": "dreamshaper",
            "name": "DreamShaper 2.52"
          },
          {
            "id": "realistic_vision_1_3",
            "name": "Realistic Vision 1.3"
          },
          {
            "id": "pastel_mix",
            "name": "Pastel Mix"
          },
          {
            "id": "anything_4_0",
            "name": "Anything 4.0"
          },
          {
            "id": "eimis_anime_diffusion_1",
            "name": "Eimis Anime Diffusion"
          },
          {
            "id": "foto_assisted_diffusion",
            "name": "Foto Assisted Diffusion"
          },
          {
            "id": "portrait_plus",
            "name": "Portrait Plus"
          },
          {
            "id": "papercut",
            "name": "Papercut"
          },
          {
            "id": "openjourney_2",
            "name": "OpenJourney v2"
          },
          {
            "id": "double_exposure_diffusion",
            "name": "Double Exposure Diffusion"
          },
          {
            "id": "openniji",
            "name": "OpenNiji"
          },
          {
            "id": "blood_orange_mix",
            "name": "BloodOrangeMix"
          },
          {
            "id": "abyss_orange_mix_2",
            "name": "AbyssOrangeMix 2"
          },
          {
            "id": "ely_orange_mix",
            "name": "ElyOrangeMix"
          },
          {
            "id": "basil_mix",
            "name": "Basil Mix"
          },
          {
            "id": "inkpunk_diffusion",
            "name": "Inkpunk Diffusion"
          },
          {
            "id": "epic_diffusion_1",
            "name": "Epîc Diffusion 1.0"
          },
          {
            "id": "hasdx",
            "name": "HASDX"
          },
          {
            "id": "emoji_diffusion",
            "name": "Emoji Diffusion"
          },
          {
            "id": "vectorartz_diffusion",
            "name": "Vectorartz Diffusion"
          },
          {
            "id": "vox_2",
            "name": "Vox 2"
          },
          {
            "id": "paint_journey_2_768px",
            "name": "Paint Journey 2"
          },
          {
            "id": "stable_diffusion_papercut",
            "name": "Stable Diffusion PaperCut"
          },
          {
            "id": "stable_diffusion_voxelart",
            "name": "Stable Diffusion VoxelArt"
          },
          {
            "id": "stable_diffusion_fluidart",
            "name": "Stable Diffusion FluidArt"
          },
          {
            "id": "something_2",
            "name": "Something 2"
          },
          {
            "id": "tshirt_diffusion",
            "name": "T-shirt Diffusion"
          },
          {
            "id": "duchaiten_darkside",
            "name": "DucHaitenDarkside"
          },
          {
            "id": "dh_classicanime",
            "name": "DH ClassicAnime"
          },
          {
            "id": "duchaiten_dreamworld",
            "name": "DucHaitenDreamWorld"
          },
          {
            "id": "duchaiten_anime",
            "name": "DucHaitenAnime"
          },
          {
            "id": "anything_5_0",
            "name": "Anything 5.0"
          },
          {
            "id": "cyberrealistic_1_3",
            "name": "CyberRealistic 1.3"
          },
          {
            "id": "instruct_pix2pix",
            "name": "Instruct-Pix2Pix"
          },
          {
            "id": "deliberate_2",
            "name": "Deliberate 2"
          },
          {
            "id": "dreamshaper_5",
            "name": "DreamShaper 5"
          },
          {
            "id": "dreamshaper_6",
            "name": "DreamShaper 6"
          },
          {
            "id": "absolute_reality_1",
            "name": "AbsoluteReality 1.0"
          },
          {
            "id": "cyberrealistic_3_1",
            "name": "CyberRealistic 3.1"
          },
          {
            "id": "icbinp",
            "name": "ICBINP"
          },
          {
            "id": "dreamshaper_7",
            "name": "DreamShaper 7"
          },
          {
            "id": "absolute_reality_1_6",
            "name": "AbsoluteReality 1.6"
          },
          {
            "id": "nightmareshaper",
            "name": "NightmareShaper"
          },
          {
            "id": "dreamshaper_8",
            "name": "DreamShaper 8"
          },
          {
            "id": "absolute_reality_1_8_1",
            "name": "AbsoluteReality 1.8.1"
          },
          {
            "id": "anylora",
            "name": "AnyLora"
          },
          {
            "id": "kidsmix",
            "name": "KidsMix"
          },
          {
            "id": "dreamshaper_8_inpaint",
            "name": "DreamShaper 8 Inpaint"
          },
          {
            "id": "absolute_reality_1_8_1_inpaint",
            "name": "AbsoluteReality 1.8.1 Inpaint"
          },
          {
            "id": "cyberrealistic_3_3",
            "name": "CyberRealistic 3.3"
          },
          {
            "id": "icbinp_seco",
            "name": "ICBINP SECO"
          },
          {
            "id": "realistic_vision_5_1",
            "name": "Realistic Vision 5.1"
          },
          {
            "id": "rpg_5",
            "name": "RPG 5"
          },
          {
            "id": "toonify_2",
            "name": "Toonify 2"
          },
          {
            "id": "dreamix_1",
            "name": "Dreamix 1"
          },
          {
            "id": "cyberrealistic_3_3_inpaint",
            "name": "CyberRealistic 3.3 Inpaint"
          },
          {
            "id": "icbinp_seco_inpaint",
            "name": "ICBINP SECO Inpaint"
          },
          {
            "id": "realistic_vision_5_1_inpaint",
            "name": "Realistic Vision 5.1 Inpaint"
          },
          {
            "id": "anything_4_5_inpaint",
            "name": "Anything 4.5 Inpaint"
          },
          {
            "id": "furrytoonmix",
            "name": "FurryToonMix"
          },
          {
            "id": "realcartoon3d_13",
            "name": "RealCartoon3D 13"
          },
          {
            "id": "analogmadness_7",
            "name": "Analog Madness 7"
          },
          {
            "id": "yesmix_4",
            "name": "YesMix 4"
          },
          {
            "id": "realdream_12",
            "name": "RealDream 12"
          },
          {
            "id": "realcartoonanime_10",
            "name": "RealCartoonAnime 10"
          },
          {
            "id": "juggernaut_reborn",
            "name": "Juggernaut Reborn"
          },
          {
            "id": "0001softrealistic_v187",
            "name": "0001SoftRealistic v187"
          },
          {
            "id": "indigo_furry_mix_v120_hybrid",
            "name": "Indigo Furry mix v120 hybrid"
          },
          {
            "id": "ghostmix_v2",
            "name": "GhostMix v2"
          },
          {
            "id": "dark_sushi_mix_v2_25d",
            "name": "Dark Sushi Mix v2.25D"
          },
          {
            "id": "arthemy_comics_gt_beta",
            "name": "Arthemy Comics GT "
          },
          {
            "id": "art_universe_v8",
            "name": "Art Universe v8"
          }
        ]
      },
      {
        "key": "sd2",
        "name": "Stable Diffusion 2.x & finetune (SD2)",
        "models": [
          {
            "id": "stablediffusion_2_0_512px",
            "name": "Stable Diffusion 2.0 (512px)"
          },
          {
            "id": "stablediffusion_2_0_768px",
            "name": "Stable Diffusion 2.0 (768px)"
          },
          {
            "id": "stablediffusion_2_1_512px",
            "name": "Stable Diffusion 2.1 (512px)"
          },
          {
            "id": "stablediffusion_2_1_768px",
            "name": "Stable Diffusion 2.1 (768px)"
          },
          {
            "id": "stablediffusion_inpaint_2",
            "name": "Stable Diffusion Inpaint 2"
          },
          {
            "id": "waifudiffusion_1_4",
            "name": "Waifu Diffusion 1.4"
          },
          {
            "id": "redshift_diffusion_768px",
            "name": "Redshift Diffusion (768px)"
          },
          {
            "id": "future_diffusion",
            "name": "Future Diffusion"
          },
          {
            "id": "steampunk_diffusion",
            "name": "Steampunk Diffusion"
          },
          {
            "id": "texture_diffusion",
            "name": "Texture Diffusion"
          }
        ]
      },
      {
        "key": "sdxl",
        "name": "Stable Diffusion XL (SDXL)",
        "models": [
          {
            "id": "sdxl_1024px",
            "name": "Stable Diffusion XL"
          },
          {
            "id": "dreamshaperxl_1024px",
            "name": "DreamShaper XL"
          },
          {
            "id": "juggernautxl_1024px",
            "name": "JuggernautXL 5.0"
          },
          {
            "id": "tshirtdesignredmond_1024px",
            "name": "Tshirt Design Redmond"
          },
          {
            "id": "juggernautxl_rundiffusion_8_1024px",
            "name": "JuggernautXL+RunDiffusion 8.0"
          },
          {
            "id": "bluepencilxl_1024px",
            "name": "BluePencilXL 3.1.0"
          },
          {
            "id": "ponyxl_6",
            "name": "PurpleSmart.ai’s Pony Diffusion v6 XL"
          },
          {
            "id": "illustrious_perfect_deliberate_1024px",
            "name": "Illustrious Perfect Deliberate"
          },
          {
            "id": "illustrious_hassaku_xl_1024px",
            "name": "Illustrious Hassaku XL"
          }
        ]
      },
      {
        "key": "sdxl_lightning",
        "name": "SDXL Lightning / Turbo",
        "models": [
          {
            "id": "juggernautxl_9_lightning_1024px",
            "name": "JuggernautXL 9 Lightning"
          },
          {
            "id": "dreamshaperxl_lightning_1024px",
            "name": "DreamshaperXL Lightning"
          },
          {
            "id": "envy_starlight_xl_01_lightning_1024px",
            "name": "Envy Starlight XL 01 Lightning"
          },
          {
            "id": "ponyxl_6_turbo_dpo",
            "name": "PurpleSmart.ai’s Pony Diffusion v6 XL Turbo DPO"
          },
          {
            "id": "juggernautxl_10_hyper",
            "name": "JuggernautXL 10 Hyper"
          }
        ]
      },
      {
        "key": "flux_schnell",
        "name": "Flux",
        "models": [
          {
            "id": "flux_1_schnell",
            "name": "Flux Schnell"
          }
        ]
      },
      {
        "key": "sdxl_inpaint",
        "name": "SDXL Inpainting",
        "models": [
          {
            "id": "juggernautxl_x_inpaint_1024px",
            "name": "JuggernautXL 10 Inpainting"
          }
        ]
      }
    ]
  }
};
});
