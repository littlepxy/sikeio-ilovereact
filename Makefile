# Makefile
.PHONY: css
css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

.PHONY: server
server:
	browser-sync start --server --files='build/*.css, *.html, js/*.js'

.PHONY: clean
clean:
	rm -r bundle