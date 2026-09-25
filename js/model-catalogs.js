/* Model catalogs: verified live snapshots + clearly labeled user-provided crawl data.
   Update 2026-09-25: harga & skema penggunaan ditambahkan dari unggahan kurator. */
(function (root, factory) {
  const catalogs = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = catalogs;
  if (root) root.MODEL_CATALOGS = catalogs;
})(typeof window !== "undefined" ? window : null, function () {
  return {
  "zytroapi": {
    "status": "verified",
    "importedDate": "2026-09-25",
    "sourceLabel": "Tabel status+harga situs (1P = Rp1)",
    "models": [
      {
        "id": "claude-fable-5",
        "name": "claude-fable-5",
        "meta": "Rp 6.250/1 jt"
      },
      {
        "id": "claude-fable-5.1",
        "name": "claude-fable-5.1",
        "meta": "Rp 9.250/1 jt"
      },
      {
        "id": "claude-haiku-4.5",
        "name": "claude-haiku-4.5",
        "meta": "Rp 150/1 jt · offline"
      },
      {
        "id": "claude-opus-4.6",
        "name": "claude-opus-4.6",
        "meta": "Rp 3.900/1 jt"
      },
      {
        "id": "claude-opus-4.7",
        "name": "claude-opus-4.7",
        "meta": "Rp 4.400/1 jt"
      },
      {
        "id": "claude-opus-4.8",
        "name": "claude-opus-4.8",
        "meta": "Rp 4.400/1 jt"
      },
      {
        "id": "claude-opus-5",
        "name": "claude-opus-5",
        "meta": "Rp 4.400/1 jt"
      },
      {
        "id": "claude-opus-5.5",
        "name": "claude-opus-5.5",
        "meta": "Rp 2.700/1 jt"
      },
      {
        "id": "claude-sonnet-4.5",
        "name": "claude-sonnet-4.5",
        "meta": "Rp 150/1 jt · offline"
      },
      {
        "id": "claude-sonnet-4.6",
        "name": "claude-sonnet-4.6",
        "meta": "Rp 2.100/1 jt"
      },
      {
        "id": "claude-sonnet-5",
        "name": "claude-sonnet-5",
        "meta": "Rp 3.500/1 jt"
      },
      {
        "id": "deepseek-3.2",
        "name": "deepseek-3.2",
        "meta": "Rp 150/1 jt · offline"
      },
      {
        "id": "deepseek-v3.2",
        "name": "deepseek-v3.2",
        "meta": "Rp 450/1 jt"
      },
      {
        "id": "deepseek-v4-flash",
        "name": "deepseek-v4-flash",
        "meta": "Rp 850/1 jt"
      },
      {
        "id": "deepseek-v4-pro",
        "name": "deepseek-v4-pro",
        "meta": "Rp 850/1 jt"
      },
      {
        "id": "deepseek-v4.1-flash",
        "name": "deepseek-v4.1-flash",
        "meta": "Rp 850/1 jt"
      },
      {
        "id": "frontier-model-cheap",
        "name": "frontier-model-cheap",
        "meta": "Rp 500/1 jt"
      },
      {
        "id": "gemini-3.1-pro",
        "name": "gemini-3.1-pro",
        "meta": "Rp 1.500/1 jt"
      },
      {
        "id": "gemini-3.5-flash",
        "name": "gemini-3.5-flash",
        "meta": "Rp 860/1 jt · offline"
      },
      {
        "id": "gemini-3.6-flash",
        "name": "gemini-3.6-flash",
        "meta": "Rp 650/1 jt"
      },
      {
        "id": "gemini-3.7-flash",
        "name": "gemini-3.7-flash",
        "meta": "Rp 1.500/1 jt"
      },
      {
        "id": "gemini-3.8-flash",
        "name": "gemini-3.8-flash",
        "meta": "Rp 1.000/1 jt"
      },
      {
        "id": "glm-5",
        "name": "glm-5",
        "meta": "Rp 150/1 jt · offline"
      },
      {
        "id": "glm-5.0-turbo",
        "name": "glm-5.0-turbo",
        "meta": "Rp 850/1 jt"
      },
      {
        "id": "glm-5.1",
        "name": "glm-5.1",
        "meta": "Rp 850/1 jt"
      },
      {
        "id": "glm-5.2",
        "name": "glm-5.2",
        "meta": "Rp 1.100/1 jt"
      },
      {
        "id": "glm-5.3",
        "name": "glm-5.3",
        "meta": "Rp 1.300/1 jt"
      },
      {
        "id": "glm-5.3-flash",
        "name": "glm-5.3-flash",
        "meta": "Rp 850/1 jt"
      },
      {
        "id": "glm-5.3-flashx",
        "name": "glm-5.3-flashx",
        "meta": "Rp 1.200/1 jt"
      },
      {
        "id": "glm-5v-turbo",
        "name": "glm-5v-turbo",
        "meta": "Rp 850/1 jt"
      },
      {
        "id": "gpt-4o",
        "name": "gpt-4o",
        "meta": "Rp 250/1 jt"
      },
      {
        "id": "gpt-5.3-codex",
        "name": "gpt-5.3-codex",
        "meta": "Rp 1.200/1 jt"
      },
      {
        "id": "gpt-5.5",
        "name": "gpt-5.5",
        "meta": "Rp 2.100/1 jt"
      },
      {
        "id": "gpt-5.6-luna",
        "name": "gpt-5.6-luna",
        "meta": "Rp 1.500/1 jt"
      },
      {
        "id": "gpt-5.6-sol",
        "name": "gpt-5.6-sol",
        "meta": "Rp 3.000/1 jt"
      },
      {
        "id": "gpt-5.6-terra",
        "name": "gpt-5.6-terra",
        "meta": "Rp 2.100/1 jt"
      },
      {
        "id": "gpt-6-astra",
        "name": "gpt-6-astra",
        "meta": "Rp 6.250/1 jt"
      },
      {
        "id": "gpt-6-luna",
        "name": "gpt-6-luna",
        "meta": "Rp 250/1 jt"
      },
      {
        "id": "gpt-6-sol",
        "name": "gpt-6-sol",
        "meta": "Rp 2.700/1 jt"
      },
      {
        "id": "grok-4.3",
        "name": "grok-4.3",
        "meta": "Rp 450/1 jt"
      },
      {
        "id": "grok-4.5",
        "name": "grok-4.5",
        "meta": "Rp 800/1 jt"
      },
      {
        "id": "grok-4.6",
        "name": "grok-4.6",
        "meta": "Rp 1.700/1 jt"
      },
      {
        "id": "grok-build-0.1",
        "name": "grok-build-0.1",
        "meta": "Rp 550/1 jt"
      },
      {
        "id": "grok-composer-2.5-fast",
        "name": "grok-composer-2.5-fast",
        "meta": "Rp 1.300/1 jt"
      },
      {
        "id": "hy3",
        "name": "hy3",
        "meta": "Rp 350/1 jt"
      },
      {
        "id": "hy4",
        "name": "hy4",
        "meta": "Rp 400/1 jt"
      },
      {
        "id": "hy4-preview",
        "name": "hy4-preview",
        "meta": "Rp 450/1 jt"
      },
      {
        "id": "kimi-k2.5",
        "name": "kimi-k2.5",
        "meta": "Rp 750/1 jt"
      },
      {
        "id": "kimi-k2.6",
        "name": "kimi-k2.6",
        "meta": "Rp 800/1 jt"
      },
      {
        "id": "kimi-k2.7",
        "name": "kimi-k2.7",
        "meta": "Rp 750/1 jt"
      },
      {
        "id": "kimi-k2.7-code",
        "name": "kimi-k2.7-code",
        "meta": "Rp 950/1 jt"
      },
      {
        "id": "kimi-k3",
        "name": "kimi-k3",
        "meta": "Rp 1.300/1 jt"
      },
      {
        "id": "mimo-v2.5",
        "name": "mimo-v2.5",
        "meta": "Rp 400/1 jt"
      },
      {
        "id": "mimo-v2.5-pro",
        "name": "mimo-v2.5-pro",
        "meta": "Rp 750/1 jt"
      },
      {
        "id": "minimax-m2.5",
        "name": "minimax-m2.5",
        "meta": "Rp 300/1 jt"
      },
      {
        "id": "minimax-m2.7",
        "name": "minimax-m2.7",
        "meta": "Rp 650/1 jt"
      },
      {
        "id": "minimax-m3",
        "name": "minimax-m3",
        "meta": "Rp 750/1 jt"
      },
      {
        "id": "muse-spark-1.2",
        "name": "muse-spark-1.2",
        "meta": "Rp 750/1 jt"
      },
      {
        "id": "muse-spark-1.3",
        "name": "muse-spark-1.3",
        "meta": "Rp 750/1 jt"
      },
      {
        "id": "nemotron-3-super",
        "name": "nemotron-3-super",
        "meta": "Rp 300/1 jt · offline"
      },
      {
        "id": "qwen-3.5-flash",
        "name": "qwen-3.5-flash",
        "meta": "Rp 450/1 jt"
      },
      {
        "id": "qwen-3.5-plus",
        "name": "qwen-3.5-plus",
        "meta": "Rp 450/1 jt"
      },
      {
        "id": "qwen-3.6-flash",
        "name": "qwen-3.6-flash",
        "meta": "Rp 450/1 jt"
      },
      {
        "id": "qwen-3.6-plus",
        "name": "qwen-3.6-plus",
        "meta": "Rp 450/1 jt"
      },
      {
        "id": "qwen-3.7-flash",
        "name": "qwen-3.7-flash",
        "meta": "Rp 450/1 jt"
      },
      {
        "id": "qwen-3.7-max",
        "name": "qwen-3.7-max",
        "meta": "Rp 650/1 jt"
      },
      {
        "id": "qwen-3.7-plus",
        "name": "qwen-3.7-plus",
        "meta": "Rp 550/1 jt"
      },
      {
        "id": "qwen-3.8-flash",
        "name": "qwen-3.8-flash",
        "meta": "Rp 750/1 jt"
      },
      {
        "id": "qwen-3.8-max",
        "name": "qwen-3.8-max",
        "meta": "Rp 850/1 jt"
      },
      {
        "id": "qwen-3.8-max-0902",
        "name": "qwen-3.8-max-0902",
        "meta": "Rp 850/1 jt"
      },
      {
        "id": "qwen3.8-max",
        "name": "qwen3.8-max",
        "meta": "Rp 750/1 jt"
      }
    ]
  },
  "ruvicode": {
    "status": "verified",
    "importedDate": "2026-09-25",
    "sourceLabel": "Tabel harga situs (Rp/1 jt token)",
    "models": [
      {
        "id": "deepseek-v4-flash-0731",
        "name": "deepseek-v4-flash-0731",
        "meta": "in Rp 118 · cache Rp 24 · out Rp 1.260 /1 jt · ctx 1.05M"
      },
      {
        "id": "deepseek-v4-flash",
        "name": "deepseek-v4-flash",
        "meta": "in Rp 412 · cache Rp 82 · out Rp 824 /1 jt · ctx 1.05M"
      },
      {
        "id": "deepseek-v4.1-flash",
        "name": "deepseek-v4.1-flash",
        "meta": "in Rp 506 · cache Rp 16 · out Rp 1.519 /1 jt · ctx 1M"
      },
      {
        "id": "glm-5.3-flash",
        "name": "glm-5.3-flash",
        "meta": "in Rp 629 · cache Rp 126 · out Rp 2.096 /1 jt · ctx 1M"
      },
      {
        "id": "gpt-5.6-luna",
        "name": "gpt-5.6-luna",
        "meta": "in Rp 760 · cache Rp 76 · out Rp 4.561 /1 jt · ctx 1.05M"
      },
      {
        "id": "minimax-m2.5",
        "name": "minimax-m2.5",
        "meta": "in Rp 1.063 · cache Rp 106 · out Rp 3.740 /1 jt · ctx 205K"
      },
      {
        "id": "minimax-m2.7",
        "name": "minimax-m2.7",
        "meta": "in Rp 1.248 · cache Rp 250 · out Rp 4.991 /1 jt · ctx 205K"
      },
      {
        "id": "deepseek-v4-pro-0813",
        "name": "deepseek-v4-pro-0813",
        "meta": "in Rp 1.830 · cache Rp 61 · out Rp 5.489 /1 jt · ctx 1M"
      },
      {
        "id": "gpt-5.6-luna-pro",
        "name": "gpt-5.6-luna-pro",
        "meta": "in Rp 2.323 · cache Rp 232 · out Rp 13.936 /1 jt · ctx 1.05M"
      },
      {
        "id": "glm-5.2",
        "name": "glm-5.2",
        "meta": "in Rp 2.413 · cache Rp 448 · out Rp 7.584 /1 jt · ctx 1M"
      },
      {
        "id": "kimi-k2.7-code",
        "name": "kimi-k2.7-code",
        "meta": "in Rp 2.419 · cache Rp 589 · out Rp 12.163 /1 jt · ctx 256K"
      },
      {
        "id": "gemini-3.8-flash",
        "name": "gemini-3.8-flash",
        "meta": "in Rp 2.742 · cache Rp 275 · out Rp 13.710 /1 jt · ctx 1.05M"
      },
      {
        "id": "gemini-3.7-flash",
        "name": "gemini-3.7-flash",
        "meta": "in Rp 2.811 · cache Rp 281 · out Rp 14.054 /1 jt · ctx 1.05M"
      },
      {
        "id": "kimi-k2.6",
        "name": "kimi-k2.6",
        "meta": "in Rp 2.819 · cache Rp 601 · out Rp 13.154 /1 jt · ctx 256K"
      },
      {
        "id": "glm-5.3",
        "name": "glm-5.3",
        "meta": "in Rp 3.256 · cache Rp 605 · out Rp 10.235 /1 jt · ctx 1M"
      },
      {
        "id": "gpt-5.4-mini",
        "name": "gpt-5.4-mini",
        "meta": "in Rp 3.356 · cache Rp 336 · out Rp 20.133 /1 jt · ctx 400K"
      },
      {
        "id": "deepseek-v4-pro",
        "name": "deepseek-v4-pro",
        "meta": "in Rp 3.607 · cache Rp 301 · out Rp 7.214 /1 jt · ctx 1.05M"
      },
      {
        "id": "kimi-k2.5",
        "name": "kimi-k2.5",
        "meta": "in Rp 3.624 · cache Rp 564 · out Rp 18.120 /1 jt · ctx 256K"
      },
      {
        "id": "glm-5.1",
        "name": "glm-5.1",
        "meta": "in Rp 5.186 · cache Rp 963 · out Rp 16.299 /1 jt · ctx 200K"
      },
      {
        "id": "gemini-3-5-flash",
        "name": "gemini-3-5-flash",
        "meta": "in Rp 5.637 · cache Rp 564 · out Rp 33.823 /1 jt · ctx 1.05M"
      },
      {
        "id": "claude-haiku-4.5",
        "name": "claude-haiku-4.5",
        "meta": "in Rp 6.219 · cache Rp 622 · out Rp 31.096 /1 jt · ctx 200K"
      },
      {
        "id": "gpt-5.6-terra",
        "name": "gpt-5.6-terra",
        "meta": "in Rp 7.530 · cache Rp 753 · out Rp 45.178 /1 jt · ctx 1.05M"
      },
      {
        "id": "gpt-5.6-sol",
        "name": "gpt-5.6-sol",
        "meta": "in Rp 8.230 · cache Rp 823 · out Rp 41.149 /1 jt · ctx 1.05M"
      },
      {
        "id": "gemini-3.1-pro-preview",
        "name": "gemini-3.1-pro-preview",
        "meta": "in Rp 8.769 · cache Rp 877 · out Rp 52.614 /1 jt · ctx 1.05M"
      },
      {
        "id": "gpt-5.4",
        "name": "gpt-5.4",
        "meta": "in Rp 9.446 · cache Rp 945 · out Rp 56.678 /1 jt · ctx 1.05M"
      },
      {
        "id": "kimi-k3",
        "name": "kimi-k3",
        "meta": "in Rp 11.540 · cache Rp 1.154 · out Rp 57.699 /1 jt · ctx 1M"
      },
      {
        "id": "claude-sonnet-5",
        "name": "claude-sonnet-5",
        "meta": "in Rp 12.473 · cache Rp 1.247 · out Rp 62.367 /1 jt · ctx 1M"
      },
      {
        "id": "grok-4.5",
        "name": "grok-4.5",
        "meta": "in Rp 13.231 · cache Rp 1.985 · out Rp 39.693 /1 jt · ctx 500K"
      },
      {
        "id": "grok-4.6",
        "name": "grok-4.6",
        "meta": "in Rp 13.588 · cache Rp 3.397 · out Rp 40.764 /1 jt · ctx 500K"
      },
      {
        "id": "gpt-5.6-sol-pro",
        "name": "gpt-5.6-sol-pro",
        "meta": "in Rp 14.811 · cache Rp 1.481 · out Rp 74.054 /1 jt · ctx 1.05M"
      },
      {
        "id": "claude-sonnet-4.5",
        "name": "claude-sonnet-4.5",
        "meta": "in Rp 17.009 · cache Rp 1.701 · out Rp 85.046 /1 jt · ctx 200K"
      },
      {
        "id": "claude-opus-4.6",
        "name": "claude-opus-4.6",
        "meta": "in Rp 18.877 · cache Rp 1.888 · out Rp 94.384 /1 jt · ctx 1M"
      },
      {
        "id": "claude-opus-4.7",
        "name": "claude-opus-4.7",
        "meta": "in Rp 19.190 · cache Rp 1.919 · out Rp 95.951 /1 jt · ctx 1M"
      },
      {
        "id": "claude-opus-5",
        "name": "claude-opus-5",
        "meta": "in Rp 19.641 · cache Rp 1.964 · out Rp 98.205 /1 jt · ctx 1M"
      },
      {
        "id": "gpt-5.6-terra-pro",
        "name": "gpt-5.6-terra-pro",
        "meta": "in Rp 21.475 · cache Rp 2.148 · out Rp 128.851 /1 jt · ctx 1.05M"
      },
      {
        "id": "gpt-5.5",
        "name": "gpt-5.5",
        "meta": "in Rp 23.351 · cache Rp 2.335 · out Rp 140.106 /1 jt · ctx 1.05M"
      },
      {
        "id": "claude-opus-4.8",
        "name": "claude-opus-4.8",
        "meta": "in Rp 30.977 · cache Rp 3.098 · out Rp 154.887 /1 jt · ctx 1M"
      },
      {
        "id": "gpt-6-astra",
        "name": "gpt-6-astra",
        "meta": "in Rp 37.636 · cache Rp 3.764 · out Rp 188.181 /1 jt · ctx 1.05M"
      },
      {
        "id": "claude-opus-4.5",
        "name": "claude-opus-4.5",
        "meta": "in Rp 41.167 · cache Rp 4.117 · out Rp 205.834 /1 jt · ctx 200K"
      },
      {
        "id": "claude-fable-5.1",
        "name": "claude-fable-5.1",
        "meta": "in Rp 53.381 · cache Rp 1.335 · out Rp 266.906 /1 jt · ctx 1M"
      },
      {
        "id": "claude-fable-5",
        "name": "claude-fable-5",
        "meta": "in Rp 53.662 · cache Rp 5.366 · out Rp 268.310 /1 jt · ctx 1M"
      },
      {
        "id": "grok-4.3",
        "name": "grok-4.3",
        "meta": "in Rp 10.683 · cache Rp 1.709 · out Rp 21.290 /1 jt · ctx 1M"
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
    "status": "verified",
    "importedDate": "2026-09-25",
    "sourceLabel": "Daftar harga situs (Rp/1 jt token)",
    "models": [
      {
        "id": "claude-opus-4.8",
        "name": "claude-opus-4.8",
        "meta": "Rp 2.730/1 jt token"
      },
      {
        "id": "claude-opus-5",
        "name": "claude-opus-5",
        "meta": "Rp 2.730/1 jt token"
      },
      {
        "id": "claude-sonnet-5",
        "name": "claude-sonnet-5",
        "meta": "Rp 2.100/1 jt token"
      },
      {
        "id": "gpt-5.6-luna",
        "name": "gpt-5.6-luna",
        "meta": "Rp 420/1 jt token"
      },
      {
        "id": "gpt-5.6-sol",
        "name": "gpt-5.6-sol",
        "meta": "Rp 1.890/1 jt token"
      },
      {
        "id": "gpt-5.6-terra",
        "name": "gpt-5.6-terra",
        "meta": "Rp 1.743/1 jt token"
      },
      {
        "id": "gpt-6-astra",
        "name": "gpt-6-astra",
        "meta": "Rp 2.520/1 jt token"
      },
      {
        "id": "gpt-6-luna",
        "name": "gpt-6-luna",
        "meta": "Rp 357/1 jt token"
      },
      {
        "id": "gpt-6-sol",
        "name": "gpt-6-sol",
        "meta": "Rp 945/1 jt token"
      },
      {
        "id": "glm-5.2",
        "name": "glm-5.2",
        "meta": "Rp 294/1 jt token"
      },
      {
        "id": "glm-5.3",
        "name": "glm-5.3",
        "meta": "Rp 420/1 jt token"
      },
      {
        "id": "glm-5.3-flash",
        "name": "glm-5.3-flash",
        "meta": "Rp 357/1 jt token"
      },
      {
        "id": "deepseek-v4-flash",
        "name": "deepseek-v4-flash",
        "meta": "Rp 315/1 jt token"
      },
      {
        "id": "deepseek-v4-flash-0731",
        "name": "deepseek-v4-flash-0731",
        "meta": "Rp 378/1 jt token"
      },
      {
        "id": "deepseek-v4-flash-vision-exp",
        "name": "deepseek-v4-flash-vision-exp",
        "meta": "Rp 420/1 jt token"
      },
      {
        "id": "deepseek-v4-pro",
        "name": "deepseek-v4-pro",
        "meta": "Rp 378/1 jt token"
      },
      {
        "id": "deepseek-v4-pro-0813",
        "name": "deepseek-v4-pro-0813",
        "meta": "Rp 483/1 jt token"
      },
      {
        "id": "deepseek-v4.1-flash",
        "name": "deepseek-v4.1-flash",
        "meta": "Rp 336/1 jt token"
      },
      {
        "id": "kimi-k2.7-code",
        "name": "kimi-k2.7-code",
        "meta": "Rp 378/1 jt token"
      },
      {
        "id": "kimi-k2.8",
        "name": "kimi-k2.8",
        "meta": "Rp 378/1 jt token"
      },
      {
        "id": "kimi-k3",
        "name": "kimi-k3",
        "meta": "Rp 420/1 jt token"
      },
      {
        "id": "kimi-k3-fast",
        "name": "kimi-k3-fast",
        "meta": "Rp 315/1 jt token"
      },
      {
        "id": "kimi-k3-ultra",
        "name": "kimi-k3-ultra",
        "meta": "Rp 525/1 jt token"
      },
      {
        "id": "gemini-3.1-pro",
        "name": "gemini-3.1-pro",
        "meta": "Rp 441/1 jt token"
      },
      {
        "id": "gemini-3.6-flash",
        "name": "gemini-3.6-flash",
        "meta": "Rp 315/1 jt token"
      },
      {
        "id": "gemini-3.7-flash",
        "name": "gemini-3.7-flash",
        "meta": "Rp 357/1 jt token"
      },
      {
        "id": "gemini-3.8-flash",
        "name": "gemini-3.8-flash",
        "meta": "Rp 399/1 jt token"
      },
      {
        "id": "muse-spark-1.2",
        "name": "muse-spark-1.2",
        "meta": "Rp 210/1 jt token"
      },
      {
        "id": "qwen3.8-max",
        "name": "qwen3.8-max",
        "meta": "Rp 378/1 jt token"
      },
      {
        "id": "grok-4.7",
        "name": "grok-4.7",
        "meta": "Rp 210/1 jt token"
      },
      {
        "id": "mimo-v2.5",
        "name": "mimo-v2.5",
        "meta": "Rp 273/1 jt token"
      },
      {
        "id": "mimo-v2.6-flash",
        "name": "mimo-v2.6-flash",
        "meta": "Rp 315/1 jt token"
      },
      {
        "id": "mimo-v2.6-pro",
        "name": "mimo-v2.6-pro",
        "meta": "Rp 378/1 jt token"
      },
      {
        "id": "atria-dawn",
        "name": "atria-dawn",
        "meta": "Rp 105/1 jt token"
      },
      {
        "id": "minimax-m3",
        "name": "minimax-m3",
        "meta": "Rp 462/1 jt token"
      },
      {
        "id": "hy4",
        "name": "hy4",
        "meta": "Rp 210/1 jt token"
      }
    ],
    "note": "Paket coin: Starter 5 coin = Rp 4.000 (7 hari); Basic 10 coin = Rp 8.000 (14 hari); Pro 50 coin = Rp 18.000 (14 hari); Business 100 coin = Rp 30.000 (14 hari); Enterprise 200 coin = Rp 60.000 (21 hari). Promo: GAS Ultimate 500 coin = Rp 118.750 (-5, 28 hari); GAS Infinity 1000 coin = Rp 211.500 (-6, 28 hari); GAS Infinity Max 2000 coin = Rp 390.600 (-7, 60 hari)"
  },
  "oaoclipora": {
    "status": "verified",
    "importedDate": "2026-09-25",
    "sourceLabel": "Halaman status situs",
    "models": [
      {
        "id": "auto-oao-jailbreak",
        "name": "auto-oao-jailbreak",
        "meta": "Chat & tugas umum · sehat · ~7.2s · 3729 tps"
      },
      {
        "id": "claude-fable-5",
        "name": "claude-fable-5",
        "meta": "Chat & tugas umum · sehat · ~25.9s · 2092 tps · VIP"
      },
      {
        "id": "claude-opus-5",
        "name": "claude-opus-5",
        "meta": "Agent panjang + coding kompleks · sehat · ~37s · 28 tps · VIP"
      },
      {
        "id": "deepseek-v4-flash",
        "name": "deepseek-v4-flash",
        "meta": "Agent coding hemat biaya · sehat · ~24.1s · 1052 tps"
      },
      {
        "id": "deepseek-v4-pro",
        "name": "deepseek-v4-pro",
        "meta": "Reasoning mendalam + workflow agent · sehat · ~18s · 4856 tps"
      },
      {
        "id": "deepseek-v4.1-flash",
        "name": "deepseek-v4.1-flash",
        "meta": "Chat & tugas umum · sehat · ~4.4s · 53 tps · VIP"
      },
      {
        "id": "gemini-3.5-flash",
        "name": "gemini-3.5-flash",
        "meta": "Chat & tugas umum · sehat · ~6.9s · 252 tps · VIP"
      },
      {
        "id": "glm-5.2",
        "name": "glm-5.2",
        "meta": "Agent/reasoning konteks panjang · sehat · ~8.8s · 7596 tps"
      },
      {
        "id": "glm-5.3",
        "name": "glm-5.3",
        "meta": "Coding agentic open-weight · ⚠️ perlu perhatian · ~8.9s · 28 tps · VIP"
      },
      {
        "id": "glm-5.3-flash",
        "name": "glm-5.3-flash",
        "meta": "Coding agentic cepat · sehat · ~10.2s · 305 tps"
      },
      {
        "id": "gpt-5.6-luna",
        "name": "gpt-5.6-luna",
        "meta": "Inferensi murah volume tinggi · sehat · ~8.9s · 145 tps"
      },
      {
        "id": "gpt-6-astra",
        "name": "gpt-6-astra",
        "meta": "Agen otonom end-to-end · sehat · ~23.3s · 1422 tps · VIP"
      },
      {
        "id": "grok-4.5",
        "name": "grok-4.5",
        "meta": "Reasoning engineering/coding · sehat · ~4.5s · 358 tps"
      },
      {
        "id": "kimi-k3",
        "name": "kimi-k3",
        "meta": "Konteks masif + multimodal panjang · sehat · ~10.9s · — tps · VIP"
      },
      {
        "id": "mimo-v2.5",
        "name": "mimo-v2.5",
        "meta": "Chat & tugas umum · sehat · ~6.8s · 261 tps"
      },
      {
        "id": "mimo-v2.5-pro",
        "name": "mimo-v2.5-pro",
        "meta": "Chat & tugas umum · sehat · ~29.4s · 2918 tps"
      },
      {
        "id": "muse-spark-1.3-contributor",
        "name": "muse-spark-1.3-contributor",
        "meta": "Agen coding jangka panjang · sehat · ~13.7s · 4301 tps"
      },
      {
        "id": "nemotron-3-ultra",
        "name": "nemotron-3-ultra",
        "meta": "Chat & tugas umum · sehat · ~4.5s · 2177 tps"
      },
      {
        "id": "nemotron-3.5-lightning",
        "name": "nemotron-3.5-lightning",
        "meta": "Chat & tugas umum · sehat · ~10.6s · 18 tps"
      },
      {
        "id": "qwen3.8-27b",
        "name": "qwen3.8-27b",
        "meta": "Efficiency open/self-hosted · sehat · ~7.7s · 26 tps"
      },
      {
        "id": "qwen3.8-flash",
        "name": "qwen3.8-flash",
        "meta": "Agen multimodal cepat · sehat · ~2.2s · 88 tps"
      }
    ],
    "note": "Paket: Unlimited Daily (1 hari, ♾️ Unlimited) = Rp 5.000; Unlimited Weekly (7 hari, ♾️ Unlimited) = Rp 30.000; Unlimited Monthly (30 hari, ♾️ Unlimited) = Rp 99.000; Unlimited Daily VIP (1 hari, ♾️ VIP Unlimited) = Rp 20.000; Pack Starter (7 hari, 5 jt Token) = Rp 2.500; Pack Pro (14 hari, 20 jt Token) = Rp 9.000; Pack Plus (14 hari, 50 jt Token) = Rp 17.000"
  },
  "dahono": {
    "status": "verified",
    "importedDate": "2026-09-25",
    "sourceLabel": "Daftar model situs (berbayar + gratis)",
    "models": [
      {
        "id": "deepseek-v4-flash-0731-netra",
        "name": "deepseek-v4-flash-0731-netra",
        "meta": "Teks + Vision · tier starter · in Rp 7.000 · out Rp 13.000 /1 jt"
      },
      {
        "id": "deepseek-v4.1-flash-netra",
        "name": "deepseek-v4.1-flash-netra",
        "meta": "Teks + Vision · tier starter · in Rp 10.000 · out Rp 25.000 /1 jt"
      },
      {
        "id": "gemini-3.1-pro",
        "name": "gemini-3.1-pro",
        "meta": "Teks + Vision · tier starter · in Rp 3.500 · out Rp 21.000 /1 jt"
      },
      {
        "id": "gpt-5.6",
        "name": "gpt-5.6",
        "meta": "Teks + Vision · tier pro · in Rp 3.500 · out Rp 10.000 /1 jt"
      },
      {
        "id": "gpt-5.6-luna",
        "name": "gpt-5.6-luna",
        "meta": "Teks + Vision · tier pro · in Rp 4.000 · out Rp 12.000 /1 jt"
      },
      {
        "id": "gpt-5.6-sol-custom",
        "name": "gpt-5.6-sol-custom",
        "meta": "Teks + Vision · tier pro · in Rp 12.000 · out Rp 55.000 /1 jt"
      },
      {
        "id": "gpt-5.6-terra",
        "name": "gpt-5.6-terra",
        "meta": "Teks + Vision · tier pro · in Rp 6.000 · out Rp 25.000 /1 jt"
      },
      {
        "id": "gpt-6-astra",
        "name": "gpt-6-astra",
        "meta": "Teks + Vision · tier pro · in Rp 17.000 · out Rp 80.000 /1 jt"
      },
      {
        "id": "minimax-m3",
        "name": "minimax-m3",
        "meta": "Teks · tier starter · in Rp 2.000 · out Rp 2.000 /1 jt"
      },
      {
        "id": "auto",
        "name": "auto",
        "meta": "gratis"
      },
      {
        "id": "deepseek-v4-custom",
        "name": "deepseek-v4-custom",
        "meta": "gratis"
      },
      {
        "id": "deepseek-v4-flash",
        "name": "deepseek-v4-flash",
        "meta": "gratis"
      },
      {
        "id": "deepseek-v4-flash-0731",
        "name": "deepseek-v4-flash-0731",
        "meta": "gratis"
      },
      {
        "id": "deepseek-v4-flash-vision",
        "name": "deepseek-v4-flash-vision",
        "meta": "gratis"
      },
      {
        "id": "deepseek-v4-pro",
        "name": "deepseek-v4-pro",
        "meta": "gratis"
      },
      {
        "id": "deepseek-v4-pro-0813",
        "name": "deepseek-v4-pro-0813",
        "meta": "gratis"
      },
      {
        "id": "deepseek-v4.1-custom",
        "name": "deepseek-v4.1-custom",
        "meta": "gratis"
      },
      {
        "id": "deepseek-v4.1-flash",
        "name": "deepseek-v4.1-flash",
        "meta": "gratis"
      },
      {
        "id": "glm-5.1",
        "name": "glm-5.1",
        "meta": "gratis"
      },
      {
        "id": "glm-5.2",
        "name": "glm-5.2",
        "meta": "gratis"
      },
      {
        "id": "glm-5.2-custom",
        "name": "glm-5.2-custom",
        "meta": "gratis"
      },
      {
        "id": "glm-5.3",
        "name": "glm-5.3",
        "meta": "gratis"
      },
      {
        "id": "glm-5.3-custom",
        "name": "glm-5.3-custom",
        "meta": "gratis"
      },
      {
        "id": "glm-5.3-flash",
        "name": "glm-5.3-flash",
        "meta": "gratis"
      },
      {
        "id": "glm-5.3-flash-custom",
        "name": "glm-5.3-flash-custom",
        "meta": "gratis"
      },
      {
        "id": "glm-5.3-flashx",
        "name": "glm-5.3-flashx",
        "meta": "gratis"
      },
      {
        "id": "glm-5.3-flashx-custom",
        "name": "glm-5.3-flashx-custom",
        "meta": "gratis"
      },
      {
        "id": "hy3",
        "name": "hy3",
        "meta": "gratis"
      },
      {
        "id": "hy4",
        "name": "hy4",
        "meta": "gratis"
      },
      {
        "id": "kimi-k2.7-code",
        "name": "kimi-k2.7-code",
        "meta": "gratis"
      },
      {
        "id": "kimi-k2.7-code-highspeed",
        "name": "kimi-k2.7-code-highspeed",
        "meta": "gratis"
      },
      {
        "id": "kimi-k3",
        "name": "kimi-k3",
        "meta": "gratis"
      },
      {
        "id": "kimi-k3-custom",
        "name": "kimi-k3-custom",
        "meta": "gratis"
      },
      {
        "id": "mimo-v2.5-pro",
        "name": "mimo-v2.5-pro",
        "meta": "gratis"
      },
      {
        "id": "union-alpha",
        "name": "union-alpha",
        "meta": "gratis"
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
  },
  "cosmoshubid": {
    "status": "verified",
    "importedDate": "2026-09-25",
    "sourceLabel": "Daftar model bot Telegram",
    "models": [
      {
        "id": "qwen-3.7-max",
        "name": "qwen-3.7-max",
        "meta": ""
      },
      {
        "id": "gemini-3.1-pro",
        "name": "gemini-3.1-pro",
        "meta": ""
      },
      {
        "id": "kimi-k2.7-code",
        "name": "kimi-k2.7-code",
        "meta": ""
      },
      {
        "id": "glm-5.2",
        "name": "glm-5.2",
        "meta": ""
      },
      {
        "id": "deepseek-v4-pro",
        "name": "deepseek-v4-pro",
        "meta": ""
      },
      {
        "id": "deepseek-v4-flash",
        "name": "deepseek-v4-flash",
        "meta": ""
      },
      {
        "id": "kimi-k3",
        "name": "kimi-k3",
        "meta": ""
      },
      {
        "id": "minimax-m3",
        "name": "minimax-m3",
        "meta": ""
      },
      {
        "id": "gemini-3.6-flash",
        "name": "gemini-3.6-flash",
        "meta": ""
      },
      {
        "id": "deepseek-v4-flash-0731",
        "name": "deepseek-v4-flash-0731",
        "meta": ""
      },
      {
        "id": "qwen-3.8-max",
        "name": "qwen-3.8-max",
        "meta": ""
      },
      {
        "id": "gemini-3.7-flash",
        "name": "gemini-3.7-flash",
        "meta": ""
      },
      {
        "id": "glm-5.3",
        "name": "glm-5.3",
        "meta": ""
      },
      {
        "id": "deepseek-v4-pro-0813",
        "name": "deepseek-v4-pro-0813",
        "meta": ""
      },
      {
        "id": "glm-5.3-flash",
        "name": "glm-5.3-flash",
        "meta": ""
      },
      {
        "id": "qwen-3.8-flash",
        "name": "qwen-3.8-flash",
        "meta": ""
      },
      {
        "id": "qwen-3.8-max-0902",
        "name": "qwen-3.8-max-0902",
        "meta": ""
      },
      {
        "id": "gemini-3.8-flash",
        "name": "gemini-3.8-flash",
        "meta": ""
      },
      {
        "id": "qwen-3.7-flash",
        "name": "qwen-3.7-flash",
        "meta": ""
      },
      {
        "id": "qwen-3.7-plus",
        "name": "qwen-3.7-plus",
        "meta": ""
      },
      {
        "id": "qwen-3.6-flash",
        "name": "qwen-3.6-flash",
        "meta": ""
      },
      {
        "id": "qwen-3.6-plus",
        "name": "qwen-3.6-plus",
        "meta": ""
      },
      {
        "id": "qwen-3.5-flash",
        "name": "qwen-3.5-flash",
        "meta": ""
      },
      {
        "id": "qwen-3.5-plus",
        "name": "qwen-3.5-plus",
        "meta": ""
      },
      {
        "id": "deepseek-v3.2",
        "name": "deepseek-v3.2",
        "meta": ""
      },
      {
        "id": "glm-5.1",
        "name": "glm-5.1",
        "meta": ""
      },
      {
        "id": "minimax-m2.7",
        "name": "minimax-m2.7",
        "meta": ""
      },
      {
        "id": "glm-5.0-turbo",
        "name": "glm-5.0-turbo",
        "meta": ""
      },
      {
        "id": "glm-5v-turbo",
        "name": "glm-5v-turbo",
        "meta": ""
      },
      {
        "id": "kimi-k2.6",
        "name": "kimi-k2.6",
        "meta": ""
      },
      {
        "id": "kimi-k2.5",
        "name": "kimi-k2.5",
        "meta": ""
      },
      {
        "id": "hy4-preview",
        "name": "hy4-preview",
        "meta": ""
      },
      {
        "id": "hy3",
        "name": "hy3",
        "meta": ""
      },
      {
        "id": "deepseek-v3.2-free",
        "name": "deepseek-v3.2-free",
        "meta": ""
      },
      {
        "id": "hy3-free",
        "name": "hy3-free",
        "meta": ""
      },
      {
        "id": "hy4-preview-free",
        "name": "hy4-preview-free",
        "meta": ""
      },
      {
        "id": "gpt-5.6-luna",
        "name": "gpt-5.6-luna",
        "meta": ""
      },
      {
        "id": "gpt-5.6-terra",
        "name": "gpt-5.6-terra",
        "meta": ""
      },
      {
        "id": "gpt-5.6-sol",
        "name": "gpt-5.6-sol",
        "meta": ""
      },
      {
        "id": "claude-opus-4.6",
        "name": "claude-opus-4.6",
        "meta": ""
      },
      {
        "id": "claude-opus-4.7",
        "name": "claude-opus-4.7",
        "meta": ""
      },
      {
        "id": "claude-opus-5",
        "name": "claude-opus-5",
        "meta": ""
      },
      {
        "id": "deepseek-v4.1-flash",
        "name": "deepseek-v4.1-flash",
        "meta": ""
      },
      {
        "id": "gpt-6-astra",
        "name": "gpt-6-astra",
        "meta": ""
      },
      {
        "id": "gpt-5.5",
        "name": "gpt-5.5",
        "meta": ""
      },
      {
        "id": "claude-sonnet-5",
        "name": "claude-sonnet-5",
        "meta": ""
      },
      {
        "id": "claude-sonnet-4.6",
        "name": "claude-sonnet-4.6",
        "meta": ""
      },
      {
        "id": "claude-opus-4.8",
        "name": "claude-opus-4.8",
        "meta": ""
      },
      {
        "id": "claude-fable-5",
        "name": "claude-fable-5",
        "meta": ""
      },
      {
        "id": "claude-fable-5.1",
        "name": "claude-fable-5.1",
        "meta": ""
      },
      {
        "id": "grok-composer-2.5-fast",
        "name": "grok-composer-2.5-fast",
        "meta": ""
      },
      {
        "id": "grok-4.3",
        "name": "grok-4.3",
        "meta": ""
      },
      {
        "id": "grok-4.5",
        "name": "grok-4.5",
        "meta": ""
      },
      {
        "id": "grok-4.6",
        "name": "grok-4.6",
        "meta": ""
      },
      {
        "id": "grok-build-0.1",
        "name": "grok-build-0.1",
        "meta": ""
      },
      {
        "id": "glm-5.3-flashx",
        "name": "glm-5.3-flashx",
        "meta": ""
      }
    ]
  },
  "kiosapi": {
    "status": "verified",
    "importedDate": "2026-09-25",
    "sourceLabel": "Tabel harga situs (USD/1 jt token)",
    "models": [
      {
        "id": "atria-dawn-preview",
        "name": "atria-dawn-preview",
        "meta": "Atria · in $0 · out $0 /1 jt"
      },
      {
        "id": "big-pickle",
        "name": "big-pickle",
        "meta": "OpenCode · in $0.0014 · out $0.0028 /1 jt"
      },
      {
        "id": "claude-fable-5",
        "name": "claude-fable-5",
        "meta": "Anthropic · in $0.5 · out $2.5 /1 jt"
      },
      {
        "id": "claude-opus-4-6",
        "name": "claude-opus-4-6",
        "meta": "Anthropic · in $0.1 · out $0.5 /1 jt"
      },
      {
        "id": "claude-opus-4-7",
        "name": "claude-opus-4-7",
        "meta": "Anthropic · in $0.1 · out $0.5 /1 jt"
      },
      {
        "id": "claude-opus-4-8",
        "name": "claude-opus-4-8",
        "meta": "Anthropic · in $0.1 · out $0.5 /1 jt"
      },
      {
        "id": "claude-opus-5",
        "name": "claude-opus-5",
        "meta": "Anthropic · in $0.1 · out $0.5 /1 jt"
      },
      {
        "id": "claude-sonnet-4-6",
        "name": "claude-sonnet-4-6",
        "meta": "Anthropic · in $0.06 · out $0.3 /1 jt"
      },
      {
        "id": "claude-sonnet-5",
        "name": "claude-sonnet-5",
        "meta": "Anthropic · in $0.04 · out $0.2 /1 jt"
      },
      {
        "id": "codex-auto-review",
        "name": "codex-auto-review",
        "meta": "OpenAI · in $0.01 · out $0.06 /1 jt"
      },
      {
        "id": "deepseek-v4-flash",
        "name": "deepseek-v4-flash",
        "meta": "DeepSeek · in $0.003 · out $0.012 /1 jt"
      },
      {
        "id": "deepseek-v4-flash-vision-exp",
        "name": "deepseek-v4-flash-vision-exp",
        "meta": "DeepSeek · in $0.06 · out $0.24 /1 jt"
      },
      {
        "id": "deepseek-v4-pro",
        "name": "deepseek-v4-pro",
        "meta": "DeepSeek · in $0.264 · out $0.792 /1 jt"
      },
      {
        "id": "deepseek-v4.1-flash",
        "name": "deepseek-v4.1-flash",
        "meta": "DeepSeek · in $0.06 · out $0.24 /1 jt"
      },
      {
        "id": "deepseek-v4.1-flash-req",
        "name": "deepseek-v4.1-flash-req",
        "meta": "DeepSeek · $0.002/call"
      },
      {
        "id": "dots-3-note-preview",
        "name": "dots-3-note-preview",
        "meta": "Dots · in $0 · out $0 /1 jt"
      },
      {
        "id": "gemini-3.6-flash",
        "name": "gemini-3.6-flash",
        "meta": "Google · in $0.0375 · out $0.1875 /1 jt"
      },
      {
        "id": "gemini-3.7-flash",
        "name": "gemini-3.7-flash",
        "meta": "Google · in $0.075 · out $0.375 /1 jt"
      },
      {
        "id": "gemini-3.8-flash",
        "name": "gemini-3.8-flash",
        "meta": "Google · in $0.075 · out $0.375 /1 jt"
      },
      {
        "id": "glm-5.2",
        "name": "glm-5.2",
        "meta": "Z.AI · in $0.28 · out $0.88 /1 jt"
      },
      {
        "id": "glm-5.3",
        "name": "glm-5.3",
        "meta": "Z.AI · in $0.28 · out $0.88 /1 jt"
      },
      {
        "id": "glm-5.3-flash",
        "name": "glm-5.3-flash",
        "meta": "Z.AI · in $0.03 · out $0.1 /1 jt"
      },
      {
        "id": "glm-5.3-flash-req",
        "name": "glm-5.3-flash-req",
        "meta": "Z.AI · $0.002/call"
      },
      {
        "id": "glm-5.3-flashx",
        "name": "glm-5.3-flashx",
        "meta": "Z.AI · in $0.074 · out $0.25 /1 jt"
      },
      {
        "id": "gpt-5.5",
        "name": "gpt-5.5",
        "meta": "OpenAI · in $0.25 · out $1.5 /1 jt"
      },
      {
        "id": "gpt-5.6-luna",
        "name": "gpt-5.6-luna",
        "meta": "OpenAI · in $0.01 · out $0.06 /1 jt"
      },
      {
        "id": "gpt-5.6-sol",
        "name": "gpt-5.6-sol",
        "meta": "OpenAI · in $1.1 · out $0.6 /1 jt"
      },
      {
        "id": "gpt-5.6-terra",
        "name": "gpt-5.6-terra",
        "meta": "OpenAI · in $0.04 · out $0.24 /1 jt"
      },
      {
        "id": "gpt-6-astra",
        "name": "gpt-6-astra",
        "meta": "OpenAI · in $0.2 · out $1 /1 jt"
      },
      {
        "id": "gpt-6-sol",
        "name": "gpt-6-sol",
        "meta": "OpenAI · in $0.04 · out $0.2 /1 jt"
      },
      {
        "id": "gpt-image-2",
        "name": "gpt-image-2",
        "meta": "OpenAI · $0.03/call"
      },
      {
        "id": "gpt-image-2-5-flare",
        "name": "gpt-image-2-5-flare",
        "meta": "OpenAI · $0.03/call"
      },
      {
        "id": "gpt-image-2-5-sunburst",
        "name": "gpt-image-2-5-sunburst",
        "meta": "OpenAI · $0.03/call"
      },
      {
        "id": "grok-4.5",
        "name": "grok-4.5",
        "meta": "xAI · in $0.02 · out $0.06 /1 jt"
      },
      {
        "id": "grok-4.6",
        "name": "grok-4.6",
        "meta": "xAI · in $0.02 · out $0.06 /1 jt"
      },
      {
        "id": "grok-4.7",
        "name": "grok-4.7",
        "meta": "xAI · in $0.02 · out $0.06 /1 jt"
      },
      {
        "id": "hy3",
        "name": "hy3",
        "meta": "Tencent · in $0.0264 · out $0.1056 /1 jt"
      },
      {
        "id": "hy4-preview",
        "name": "hy4-preview",
        "meta": "Tencent · in $0.1668 · out $0.5002 /1 jt"
      },
      {
        "id": "kimi-k2.7-code",
        "name": "kimi-k2.7-code",
        "meta": "Moonshot AI · in $0.19 · out $0.1 /1 jt"
      },
      {
        "id": "kimi-k3",
        "name": "kimi-k3",
        "meta": "Moonshot AI · in $0.6 · out $3 /1 jt"
      },
      {
        "id": "laguna-s-2.1",
        "name": "laguna-s-2.1",
        "meta": "Poolside · in $0 · out $0 /1 jt"
      },
      {
        "id": "ling-3.0-flash-fin",
        "name": "ling-3.0-flash-fin",
        "meta": "AntGroup · in $0 · out $0 /1 jt"
      },
      {
        "id": "ling-3.0-flash-sante",
        "name": "ling-3.0-flash-sante",
        "meta": "AntGroup · in $0 · out $0 /1 jt"
      },
      {
        "id": "mimo-v2.6-flash",
        "name": "mimo-v2.6-flash",
        "meta": "Xiaomi · in $0.0014 · out $0.0028 /1 jt"
      },
      {
        "id": "minimax-m2.7",
        "name": "minimax-m2.7",
        "meta": "MiniMax · in $0.06 · out $0.24 /1 jt"
      },
      {
        "id": "minimax-m3",
        "name": "minimax-m3",
        "meta": "MiniMax · in $0.06 · out $0.24 /1 jt"
      },
      {
        "id": "muse-spark-1.1-contributor",
        "name": "muse-spark-1.1-contributor",
        "meta": "Meta · in $0.001 · out $0.002 /1 jt"
      },
      {
        "id": "muse-spark-1.3-contributor",
        "name": "muse-spark-1.3-contributor",
        "meta": "Meta · in $0.001 · out $0.002 /1 jt"
      },
      {
        "id": "nemotron-3-super-120b-a12b",
        "name": "nemotron-3-super-120b-a12b",
        "meta": "Nvidia · in $0 · out $0 /1 jt"
      },
      {
        "id": "nemotron-3-ultra",
        "name": "nemotron-3-ultra",
        "meta": "Nvidia · in $0.0014 · out $0.0028 /1 jt"
      },
      {
        "id": "nemotron-3.5-lightning",
        "name": "nemotron-3.5-lightning",
        "meta": "Nvidia · in $0 · out $0 /1 jt"
      },
      {
        "id": "nex-n2.5-mini",
        "name": "nex-n2.5-mini",
        "meta": "Nex · in $0 · out $0 /1 jt"
      },
      {
        "id": "nex-n2.5-pro",
        "name": "nex-n2.5-pro",
        "meta": "Nex · in $0 · out $0 /1 jt"
      },
      {
        "id": "north-mini-code",
        "name": "north-mini-code",
        "meta": "Cohere · in $0 · out $0 /1 jt"
      },
      {
        "id": "qwen3.7-max",
        "name": "qwen3.7-max",
        "meta": "Alibaba · in $0.295 · out $0.885 /1 jt"
      },
      {
        "id": "qwen3.8-max",
        "name": "qwen3.8-max",
        "meta": "Alibaba · in $0.4 · out $1.2 /1 jt"
      },
      {
        "id": "sensenova-6.8-flash-lite",
        "name": "sensenova-6.8-flash-lite",
        "meta": "SenseNova · in $0 · out $0 /1 jt"
      },
      {
        "id": "space-bunny",
        "name": "space-bunny",
        "meta": "Space · in $0.0014 · out $0.0028 /1 jt"
      },
      {
        "id": "step-3.7-flash",
        "name": "step-3.7-flash",
        "meta": "StepFun · in $0 · out $0 /1 jt"
      },
      {
        "id": "lfm-2.5-2.6b",
        "name": "lfm-2.5-2.6b",
        "meta": "LFM · in $0 · out $0 /1 jt"
      },
      {
        "id": "mimo-v2.5",
        "name": "mimo-v2.5",
        "meta": "Xiaomi · in $0.0014 · out $0.0028 /1 jt"
      },
      {
        "id": "nemotron-3-ultra-550b-a55b",
        "name": "nemotron-3-ultra-550b-a55b",
        "meta": "Nvidia · in $0 · out $0 /1 jt"
      }
    ]
  },
  "pecutaan": {
    "status": "verified",
    "importedDate": "2026-09-25",
    "sourceLabel": "Daftar model situs (multiplier kuota)",
    "models": [
      {
        "id": "auto",
        "name": "auto",
        "meta": "1x kuota"
      },
      {
        "id": "deepseek-v4-flash",
        "name": "deepseek-v4-flash",
        "meta": "2x kuota"
      },
      {
        "id": "deepseek-v4-flash-0731",
        "name": "deepseek-v4-flash-0731",
        "meta": "2x kuota"
      },
      {
        "id": "deepseek-v4-flash-vision-exp",
        "name": "deepseek-v4-flash-vision-exp",
        "meta": "vision · 2.5x kuota"
      },
      {
        "id": "deepseek-v4-mod",
        "name": "deepseek-v4-mod",
        "meta": "3x kuota"
      },
      {
        "id": "deepseek-v4-pro",
        "name": "deepseek-v4-pro",
        "meta": "1.15x kuota"
      },
      {
        "id": "deepseek-v4-pro-0813",
        "name": "deepseek-v4-pro-0813",
        "meta": "1.8x kuota"
      },
      {
        "id": "deepseek-v4.1-flash",
        "name": "deepseek-v4.1-flash",
        "meta": "vision · 2.56x kuota"
      },
      {
        "id": "deepseek-v4.1-mod",
        "name": "deepseek-v4.1-mod",
        "meta": "vision · 3.2x kuota"
      },
      {
        "id": "glm-5.1",
        "name": "glm-5.1",
        "meta": "1x kuota"
      },
      {
        "id": "glm-5.2",
        "name": "glm-5.2",
        "meta": "1.25x kuota"
      },
      {
        "id": "glm-5.2-mod",
        "name": "glm-5.2-mod",
        "meta": "3x kuota"
      },
      {
        "id": "glm-5.3-flash",
        "name": "glm-5.3-flash",
        "meta": "vision · 2x kuota"
      },
      {
        "id": "glm-5.3-flash-mod",
        "name": "glm-5.3-flash-mod",
        "meta": "vision · 3.5x kuota"
      },
      {
        "id": "glm-5.3-flashx",
        "name": "glm-5.3-flashx",
        "meta": "vision · 2.5x kuota"
      },
      {
        "id": "glm-5.3-flashx-mod",
        "name": "glm-5.3-flashx-mod",
        "meta": "vision · 4x kuota"
      },
      {
        "id": "glm-5.3-mod",
        "name": "glm-5.3-mod",
        "meta": "3.2x kuota"
      },
      {
        "id": "glm-5.5",
        "name": "glm-5.5",
        "meta": "2x kuota"
      },
      {
        "id": "gpt-5.6",
        "name": "gpt-5.6",
        "meta": "vision · 5x kuota"
      },
      {
        "id": "gpt-5.6-luna",
        "name": "gpt-5.6-luna",
        "meta": "vision · 5x kuota"
      },
      {
        "id": "gpt-5.6-luna-b",
        "name": "gpt-5.6-luna-b",
        "meta": "vision · 5x kuota"
      },
      {
        "id": "gpt-5.6-terra",
        "name": "gpt-5.6-terra",
        "meta": "vision · 10x kuota"
      },
      {
        "id": "gpt-5.6-terra-b",
        "name": "gpt-5.6-terra-b",
        "meta": "vision · 10x kuota"
      },
      {
        "id": "hy3",
        "name": "hy3",
        "meta": "1x kuota"
      },
      {
        "id": "hy4",
        "name": "hy4",
        "meta": "1.4x kuota"
      },
      {
        "id": "kimi-k2.7-code",
        "name": "kimi-k2.7-code",
        "meta": "1x kuota"
      },
      {
        "id": "kimi-k2.7-code-highspeed",
        "name": "kimi-k2.7-code-highspeed",
        "meta": "1.5x kuota"
      },
      {
        "id": "kimi-k3",
        "name": "kimi-k3",
        "meta": "vision · 2x kuota"
      },
      {
        "id": "kimi-k3-mod",
        "name": "kimi-k3-mod",
        "meta": "vision · 3.5x kuota"
      },
      {
        "id": "mimo-v2.5-pro",
        "name": "mimo-v2.5-pro",
        "meta": "1.4x kuota"
      },
      {
        "id": "minimax-m3",
        "name": "minimax-m3",
        "meta": "1.4x kuota"
      }
    ],
    "note": "Paket token: 50.00M Token = Rp 10.000 promo / Rp 16.400 reguler (Rp 200/1 jt promo); 100.00M Token ⭐ = Rp 15.000 promo / Rp 22.900 reguler (Rp 150/1 jt promo); 200.00M Token = Rp 28.000 promo / Rp 44.700 reguler (Rp 140/1 jt promo); 500.00M Token = Rp 75.000 promo / Rp 113.400 reguler (Rp 150/1 jt promo); 1.00B Token = Rp 138.000 promo / Rp 191.800 reguler (Rp 138/1 jt promo); 2.00B Token = Rp 265.000 promo / Rp 349.900 reguler (Rp 132/1 jt promo)"
  },
  "pecutopus": {
    "status": "verified",
    "importedDate": "2026-09-25",
    "sourceLabel": "Daftar model situs",
    "models": [
      {
        "id": "pecut/claude-fable-5",
        "name": "pecut/claude-fable-5",
        "meta": "anthropic · ctx 1M · 12x kuota"
      },
      {
        "id": "pecut/claude-fable-5.1",
        "name": "pecut/claude-fable-5.1",
        "meta": "anthropic · ctx 1M · 12x kuota"
      },
      {
        "id": "pecut/claude-haiku-4.5",
        "name": "pecut/claude-haiku-4.5",
        "meta": "anthropic · ctx 1M · 1.5x kuota"
      },
      {
        "id": "pecut/claude-opus-4.8",
        "name": "pecut/claude-opus-4.8",
        "meta": "anthropic · ctx 200K · 3.5x kuota"
      },
      {
        "id": "pecut/claude-opus-5",
        "name": "pecut/claude-opus-5",
        "meta": "anthropic · ctx 200K · 3.5x kuota"
      },
      {
        "id": "pecut/claude-opus-5.5",
        "name": "pecut/claude-opus-5.5",
        "meta": "anthropic · ctx 1M · 3.5x kuota"
      },
      {
        "id": "pecut/claude-sonnet-5",
        "name": "pecut/claude-sonnet-5",
        "meta": "anthropic · ctx 200K · 3x kuota"
      },
      {
        "id": "pecut/deepseek-v4-flash-0731",
        "name": "pecut/deepseek-v4-flash-0731",
        "meta": "deepseek · ctx 200K · 1.5x kuota"
      },
      {
        "id": "pecut/deepseek-v4-flash-vision-exp",
        "name": "pecut/deepseek-v4-flash-vision-exp",
        "meta": "deepseek · ctx 200K · 1.5x kuota"
      },
      {
        "id": "pecut/deepseek-v4-mod",
        "name": "pecut/deepseek-v4-mod",
        "meta": "deepseek · ctx 200K · 1x kuota"
      },
      {
        "id": "pecut/deepseek-v4-pro-0813",
        "name": "pecut/deepseek-v4-pro-0813",
        "meta": "deepseek · ctx 200K · 1x kuota"
      },
      {
        "id": "pecut/deepseek-v4.1-flash",
        "name": "pecut/deepseek-v4.1-flash",
        "meta": "deepseek · ctx 200K · 1.5x kuota"
      },
      {
        "id": "pecut/deepseek-v4.1-mod",
        "name": "pecut/deepseek-v4.1-mod",
        "meta": "deepseek · ctx 200K · 1x kuota"
      },
      {
        "id": "pecut/glm-5.2",
        "name": "pecut/glm-5.2",
        "meta": "zhipu · ctx 200K · 1x kuota"
      },
      {
        "id": "pecut/glm-5.2-mod",
        "name": "pecut/glm-5.2-mod",
        "meta": "zhipu · ctx 0K · 1x kuota"
      },
      {
        "id": "pecut/glm-5.3",
        "name": "pecut/glm-5.3",
        "meta": "zhipu · ctx 200K · 1x kuota"
      },
      {
        "id": "pecut/glm-5.3-flash",
        "name": "pecut/glm-5.3-flash",
        "meta": "zhipu · ctx 200K · 1x kuota"
      },
      {
        "id": "pecut/glm-5.3-mod",
        "name": "pecut/glm-5.3-mod",
        "meta": "zhipu · ctx 200K · 1x kuota"
      },
      {
        "id": "pecut/gpt-5.6-luna",
        "name": "pecut/gpt-5.6-luna",
        "meta": "openai · ctx 200K · 1.5x kuota"
      },
      {
        "id": "pecut/gpt-5.6-sol",
        "name": "pecut/gpt-5.6-sol",
        "meta": "openai · ctx 200K · 3x kuota"
      },
      {
        "id": "pecut/gpt-5.6-terra",
        "name": "pecut/gpt-5.6-terra",
        "meta": "openai · ctx 200K · 3x kuota"
      },
      {
        "id": "pecut/gpt-6-astra",
        "name": "pecut/gpt-6-astra",
        "meta": "openai · ctx 1M · 12x kuota"
      },
      {
        "id": "pecut/gpt-6-sol",
        "name": "pecut/gpt-6-sol",
        "meta": "openai · ctx 200K · 3x kuota"
      },
      {
        "id": "pecut/grok-4.6",
        "name": "pecut/grok-4.6",
        "meta": "xai · ctx 200K · 1.5x kuota"
      },
      {
        "id": "pecut/kimi-k2.7-code",
        "name": "pecut/kimi-k2.7-code",
        "meta": "moonshot · ctx 200K · 1x kuota"
      },
      {
        "id": "pecut/kimi-k2.7-code-highspeed",
        "name": "pecut/kimi-k2.7-code-highspeed",
        "meta": "moonshot · ctx 200K · 1x kuota"
      },
      {
        "id": "pecut/kimi-k3",
        "name": "pecut/kimi-k3",
        "meta": "moonshot · ctx 200K · 1x kuota"
      },
      {
        "id": "pecut/kimi-k3-mod",
        "name": "pecut/kimi-k3-mod",
        "meta": "moonshot · ctx 200K · 1x kuota"
      },
      {
        "id": "pecut/mimo-v2.5-pro",
        "name": "pecut/mimo-v2.5-pro",
        "meta": "xiaomi · ctx 200K · 1x kuota"
      },
      {
        "id": "pecut/muse-spark-1.2",
        "name": "pecut/muse-spark-1.2",
        "meta": "meta · ctx 200K · 1x kuota"
      },
      {
        "id": "pecut/qwen3.8-max-preview",
        "name": "pecut/qwen3.8-max-preview",
        "meta": "alibaba · ctx 1M · 1x kuota"
      }
    ],
    "note": "Paket: Pecut AI Lite = Rp 20.000 (25M (20M+5M bonus), 14 hari, ~Rp 800/1 jt); Pecut AI Plus = Rp 49.000 (65M (50M+15M bonus), 14 hari, ~Rp 754/1 jt); Pecut AI Pro = Rp 97.000 (135M (100M+35M bonus), 14 hari, ~Rp 719/1 jt); Pecut AI Max = Rp 189.000 (270M (200M+70M bonus), 30 hari, ~Rp 700/1 jt); Pecut AI Ultra = Rp 279.000 (405M (300M+105M bonus), 30 hari, ~Rp 689/1 jt); Pecut AI Titan = Rp 389.000 (580M (430M+150M bonus), 30 hari, ~Rp 671/1 jt)"
  }
};
});
