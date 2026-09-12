TATUM ?= tatum
NODE ?= node
TEMPLATE ?= .tatum/bluetot

.PHONY: build clean

build:
	$(TATUM) render-all --template $(TEMPLATE) -p
	$(NODE) scripts/update-dir-structure.js

clean:
	$(NODE) scripts/clean-generated.js
