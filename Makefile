# Your Tailwind CSS version
TAILWIND_VERSION := 3.3.0

# Your output and input CSS files
OUTPUT_CSS := assets/main.css
INPUT_CSS := _css/main.css

# Platform detection
UNAME_S := $(shell uname -s)
UNAME_M := $(shell uname -m)

ifeq ($(UNAME_S), Linux)
  ifeq ($(UNAME_M), x86_64)
    PLATFORM := linux-x64
  else
    PLATFORM := linux-arm64
  endif
else ifeq ($(UNAME_S), Darwin)
  ifeq ($(UNAME_M), arm64)
    PLATFORM := macos-arm64
  else
    PLATFORM := macos-x64
  endif
endif

# Tailwind CLI binary
TAILWIND_CLI := bin/tailwindcss-v$(TAILWIND_VERSION)
TAILWIND_URL := https://github.com/tailwindlabs/tailwindcss/releases/download/v$(TAILWIND_VERSION)/tailwindcss-$(PLATFORM)

.PHONY: all build cli clean

all: build

cli: $(TAILWIND_CLI)

$(TAILWIND_CLI):
	@echo "👉  Downloading Tailwind CLI v$(TAILWIND_VERSION) for $(PLATFORM)…"
	@mkdir -p $(dir $@)
	@curl -fsSL $(TAILWIND_URL) -o $@
	@chmod +x $@

$(OUTPUT_CSS): $(INPUT_CSS) cli
	@echo "👉  Building Tailwind CSS → $@"
	@mkdir -p $(dir $@)
	@$(TAILWIND_CLI) \
	  -i $(INPUT_CSS) \
	  -o $(OUTPUT_CSS) \
    -c ./tailwind.config.js \
	  --minify

build: $(OUTPUT_CSS)

clean:
	@rm -rf $(OUTPUT_CSS) $(TAILWIND_CLI)
