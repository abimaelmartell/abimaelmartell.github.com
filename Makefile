.PHONY: assets/main.css

CSS_BASE = assets/stylesheets/

assets/main.css:
	uglifycss $(CSS_BASE)normalize.css $(CSS_BASE)screen.css $(CSS_BASE)syntax.css $(CSS_BASE)main.css > $@
