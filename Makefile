extdir := src
extzip := chrome-extension.zip

chrome-extension.zip: $(extdir)
	cp LICENSE $(extdir)
	zip -r $(extzip) $(extdir) -x \*\/.DS_Store
	rm -f $(extdir)/LICENSE


zip: $(extzip)

.PHONY: zip
