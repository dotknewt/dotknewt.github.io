---
layout: post
title: malspam analysis workshop
date: 2027-02-06 12:30:00-0000
description: Analysis of real malware delivery methods
tags: analysis
categories: work
---

> ## !!! WARN !!!
>
> These are _LIVE_ malware samples. Domains etc. may not be functioning, but you should _NOT_ handle these outside of a Virtual Machine

Download the archive from here: https://github.com/helsecert/workshop_malspam/archive/refs/heads/main.zip and extract the files on your remnux VM

- Most tools are preinstalled on remnux, the rest are `apt install`-able

### EMLdump.py

Want to look for attachments in an EML-file? Run `emldump.py <file>.eml` to see content then select the number of the content you want to dump with `emldump.py -d -s <N> <file>.eml`

```shell
localuser@MALSPAM-REMNUX:~/workshop$ emldump.py 4456803266c2e655f00881a5deb645e2559bbb51d2acbfabf131d9561fee4a20.eml
1: M         multipart/mixed
2: M         multipart/alternative
3:      2087 text/plain
4:     18468 application/rtf
5:    212480 application/vnd.ms-excel (List of Compromised Systems.xls)
# dump the contents to a file
localuser@MALSPAM-REMNUX:~/workshop$ emldump.py 4456803266c2e655f00881a5deb645e2559bbb51d2acbfabf131d9561fee4a20.eml -d -s 5 >file.xls
```

### oleid

Want a quick look at what might be inside a excel document?

```shell
localuser@MALSPAM-REMNUX:~/workshop$ oleid file.xls
XLMMacroDeobfuscator: pywin32 is not installed (only is required if you want to use MS Excel)
oleid 0.60.1 - http://decalage.info/oletools
THIS IS WORK IN PROGRESS - Check updates regularly!
Please report any issue at https://github.com/decalage2/oletools/issues

Filename: file.xls
--------------------+--------------------+----------+--------------------------
Indicator           |Value               |Risk      |Description
--------------------+--------------------+----------+--------------------------
File format         |MS Excel 97-2003    |info      |
                    |Workbook or Template|          |
--------------------+--------------------+----------+--------------------------
Container format    |OLE                 |info      |Container type
--------------------+--------------------+----------+--------------------------
Application name    |Microsoft Excel     |info      |Application name declared
                    |                    |          |in properties
--------------------+--------------------+----------+--------------------------
Properties code page|1252: ANSI Latin 1; |info      |Code page used for
                    |Western European    |          |properties
                    |(Windows)           |          |
--------------------+--------------------+----------+--------------------------
Author              |Saira Kanwal/Human  |info      |Author declared in
                    |Resource            |          |properties
--------------------+--------------------+----------+--------------------------
Encrypted           |False               |none      |The file is not encrypted
--------------------+--------------------+----------+--------------------------
VBA Macros          |Yes, suspicious     |HIGH      |This file contains VBA
                    |                    |          |macros. Suspicious
                    |                    |          |keywords were found. Use
                    |                    |          |olevba and mraptor for
                    |                    |          |more info.
--------------------+--------------------+----------+--------------------------
XLM Macros          |No                  |none      |This file does not contain
                    |                    |          |Excel 4/XLM macros.
--------------------+--------------------+----------+--------------------------
External            |0                   |none      |External relationships
Relationships       |                    |          |such as remote templates,
                    |                    |          |remote OLE objects, etc
--------------------+--------------------+----------+--------------------------

```

We see this file contains VBA Macros. Dump these to a file with `oledump.py`
