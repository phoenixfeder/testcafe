# language: de

Funktionalität: Test der Navigations-Leiste
    Als ein Nutzer der DHBW-Seite
    möchte ich die Navigationsleiste nutzen
    um besser zu navigieren

    Grundlage:
        Angenommen ich befinde mich auf der "Startseite der DHBW"

    Szenario: Die Leiste klappt mit der Menü-Schaltfläche auf
        Wenn ich mit dem Mauszeiger auf "Menü" klicke
        Dann wird "die Navigationsleiste" angezeigt

    Szenario: Die Leiste schließt sich mit der Schließen-Schaltfläche
         Wenn ich mit dem Mauszeiger auf "Menü" klicke
         Und ich mit dem Mauszeiger auf "Schließen" klicke
         Dann wird "die Navigationsleiste" nicht angezeigt

    @only
    Szenariogrundriss: Es gibt Suchergebnisse für ein Suchwort
        Wenn ich über das Suchfeld nach <suchwort> suche
        Dann werden die Suchergebnisse aufgelistet
        Und es existiert mindestens <ergebnis> Suchergebnis

        Beispiele:
        | suchwort      | ergebnis |
        | "Informatik"  | 1        |
        | "qwertzuiopü" | 0        |