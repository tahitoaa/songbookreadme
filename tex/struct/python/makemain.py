#!/usr/bin/env python3

import os, ntpath

def header(title, authors):
    head = r"""
\documentclass{article}
\usepackage[chorded]{songs}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{ae,lmodern}
\usepackage{xcolor}
\usepackage{hyperref}
\renewcommand\printchord[1]{{\color{gray}#1}}
%%%%%%%%%%%% Page Layout %%%%%%%%%%
\oddsidemargin=0cm
\evensidemargin=0cm
\topmargin=0cm
\textwidth=15cm
% \textheight=700pt
\marginparwidth=10pt
% \hoffset=-0.2in
% \voffset=-0.6in
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\columnsep=1cm
\noversenumbers
\title{""" + title  + r'}' + r"""
\author{""" + authors + r'}' + r"""
\newindex{titleidx}{titlefile}
\newauthorindex{authidx}{authfile}
\begin{document}
"""
    return head

def titles():
    s = r'''
\newpage

\maketitle

Les explications pour particier au répertoire sont dans ce \href{https://github.com/tahitoaa/songbookreadme/blob/master/songbookreadme.md}{readme}

Le lien vers le \href{https://fr.overleaf.com/9457921969mhjkwjdnycqj}{projet overleaf}.

%\showindex[2]{Index of Song Titles}{titleidx}
%\showindex[2]{Index of Song Authors}{authidx}
\newpage
'''
    return s

def footer():
    return r'''\end{document}'''

def song(filename):
    ''' Path of the song from Chords, raw.'''
    s = ''
    s += r'\chanson{' + filename + r'}{0}' + '\n'
    return s

def dirsectionmap(sectiondir):
    if sectiondir == 'nochords':
        return 'Paroles sans accords'
    if sectiondir == 'withchords':
        return 'Paroles avec accords'
    pass

def section(sectiondir):
    songfiles = os.listdir(sectiondir)
    section = r'\partie{' + dirsectionmap(ntpath.basename(sectiondir)) + r'}{' + '\n'
    section += r'' + '\n'
    for songfile in songfiles:
        section += song(songfile.replace('.tex', ''))
    section += r'}' + '\n'
    return section

def sections(sectionsdir):
    sections = ''
    for sectiondir in os.listdir(sectionsdir):
        sections += section(r'./' + sectionsdir + r'/' +sectiondir)
    return sections

def main():
    print(r'\input{macros}')
    print(r'\debut')
    print(r'\introcommune')
    print(sections('songs'))
    print(r'\fini')
    pass

if __name__=='__main__':
    main()
