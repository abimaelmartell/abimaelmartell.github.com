.PHONY: assets/main.css

ASSETS = assets/stylesheets/normalize.css\
         assets/stylesheets/screen.css\
         assets/stylesheets/syntax.css\
         assets/stylesheets/main.css

assets/main.css:
	uglifycss $(ASSETS) > $@
