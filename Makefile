.PHONY: all

all: background.html

background.html: background.md
	pandoc  -s -o background.html --template background-template.html --table-of-contents=true --mathjax background.md

clean:
	rm -f background.html