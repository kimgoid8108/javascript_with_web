const data = [
  {
    color: "#b31f8b",
    name: "Leanor Pattie",
    avatar: "https://robohash.org/rerumomnisvitae.png?size=50x50&set=set1",
    university: "Belarussian State Academy of Music",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    email: "lpattie0@edublogs.org",
  },
  {
    color: "#9960ab",
    name: "Seth Krugmann",
    avatar: "https://robohash.org/aboditea.png?size=50x50&set=set1",
    university: "Nalanda Open University",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    email: "skrugmann1@nih.gov",
  },
  {
    color: "#1af042",
    name: "Darnell Firminger",
    avatar:
      "https://robohash.org/optioblanditiisconsectetur.png?size=50x50&set=set1",
    university: "Poole Gakuin University",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    email: "dfirminger2@pinterest.com",
  },
  {
    color: "#68ac19",
    name: "Joela Jedrzej",
    avatar: "https://robohash.org/nonteneturmolestias.png?size=50x50&set=set1",
    university: "Gurukul University",
    sentences: "Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    email: "jjedrzej3@sitemeter.com",
  },
  {
    color: "#150765",
    name: "Malia McPhelim",
    avatar: "https://robohash.org/ipsamautmodi.png?size=50x50&set=set1",
    university: "Latvian Academy of Arts",
    sentences: "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    email: "mmcphelim4@furl.net",
  },
  {
    color: "#33397f",
    name: "Cirilo Goolden",
    avatar: "https://robohash.org/enimessesint.png?size=50x50&set=set1",
    university: "Universidad Nacional de Guinea Ecuatorial",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    email: "cgoolden5@house.gov",
  },
  {
    color: "#ce6270",
    name: "Isahella Mathan",
    avatar: "https://robohash.org/beataevelitcorrupti.png?size=50x50&set=set1",
    university: "University of Salerno",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    email: "imathan6@posterous.com",
  },
  {
    color: "#92ace5",
    name: "Earlie Dainter",
    avatar:
      "https://robohash.org/voluptatesdoloremquidem.png?size=50x50&set=set1",
    university: "University of Madras",
    sentences:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    email: "edainter7@about.com",
  },
  {
    color: "#e2524b",
    name: "Claudio Simonyi",
    avatar:
      "https://robohash.org/dignissimosquamaliquam.png?size=50x50&set=set1",
    university: "Guangxi Normal University",
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    email: "csimonyi8@shutterfly.com",
  },
  {
    color: "#0f7201",
    name: "Cirillo Fewlass",
    avatar: "https://robohash.org/voluptatesanobis.png?size=50x50&set=set1",
    university: "Addis Ababa Science & Technology University",
    sentences: "Nulla mollis molestie lorem.",
    email: "cfewlass9@altervista.org",
  },
  {
    color: "#027d91",
    name: "Devonna Lawrie",
    avatar: "https://robohash.org/atqueetdolor.png?size=50x50&set=set1",
    university: "Chongqing University",
    sentences:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    email: "dlawriea@bloglines.com",
  },
  {
    color: "#9b9f63",
    name: "Dorie Meakes",
    avatar:
      "https://robohash.org/omnisvoluptateplaceat.png?size=50x50&set=set1",
    university: "Michigan State University",
    sentences: "Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    email: "dmeakesb@admin.ch",
  },
  {
    color: "#b5b13f",
    name: "Bobinette Aspole",
    avatar: "https://robohash.org/recusandaequiasequi.png?size=50x50&set=set1",
    university: "Universidad del Mar",
    sentences:
      "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "baspolec@yahoo.co.jp",
  },
  {
    color: "#0f1cb1",
    name: "Virgilio Dillon",
    avatar:
      "https://robohash.org/maximeperferendisducimus.png?size=50x50&set=set1",
    university: "Fachhochschule Braunschweig/Wolfenbüttel",
    sentences: "Aenean sit amet justo. Morbi ut odio.",
    email: "vdillond@cbsnews.com",
  },
  {
    color: "#890faa",
    name: "Galven Klessmann",
    avatar: "https://robohash.org/utporrovel.png?size=50x50&set=set1",
    university: "Ecole Supérieure de Commerce de Marseille-Provence",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    email: "gklessmanne@seesaa.net",
  },
  {
    color: "#14ebb1",
    name: "Dione Riseborough",
    avatar: "https://robohash.org/aliquidautab.png?size=50x50&set=set1",
    university: "Qingdao University",
    sentences:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    email: "driseboroughf@reference.com",
  },
  {
    color: "#a08a9f",
    name: "Amberly McPeice",
    avatar: "https://robohash.org/utplaceatnon.png?size=50x50&set=set1",
    university: "University of Montenegro",
    sentences:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "amcpeiceg@apple.com",
  },
  {
    color: "#c31fbf",
    name: "Mandel Westoll",
    avatar: "https://robohash.org/exquoquos.png?size=50x50&set=set1",
    university: "Perm State Technical University",
    sentences: "Curabitur gravida nisi at nibh.",
    email: "mwestollh@prweb.com",
  },
  {
    color: "#eb81b0",
    name: "Ameline Forder",
    avatar: "https://robohash.org/quasievenietut.png?size=50x50&set=set1",
    university: "Technical University of Gabrovo",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "aforderi@sogou.com",
  },
  {
    color: "#8b8fb0",
    name: "Kara-lynn Drissell",
    avatar: "https://robohash.org/temporeodioadipisci.png?size=50x50&set=set1",
    university: "Institute of Commerce and Business",
    sentences:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    email: "kdrissellj@discuz.net",
  },
  {
    color: "#264277",
    name: "Helaina Coniam",
    avatar: "https://robohash.org/doloreametest.png?size=50x50&set=set1",
    university: "Hastings College",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    email: "hconiamk@odnoklassniki.ru",
  },
  {
    color: "#6efd10",
    name: "Arvin Mumbeson",
    avatar: "https://robohash.org/eaquequosaliquid.png?size=50x50&set=set1",
    university:
      "Technische Fachhochschule Georg Agricola für Rohstoff, Energie und, Umwelt zu Bochum",
    sentences:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "amumbesonl@etsy.com",
  },
  {
    color: "#b33efa",
    name: "Barclay Eddoes",
    avatar:
      "https://robohash.org/assumendamagnidoloribus.png?size=50x50&set=set1",
    university: "Universidad Complutense de Madrid",
    sentences:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "beddoesm@quantcast.com",
  },
  {
    color: "#15b0c2",
    name: "Thadeus Braime",
    avatar: "https://robohash.org/adipisciveroet.png?size=50x50&set=set1",
    university: "Technische Universität Darmstadt",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    email: "tbraimen@paginegialle.it",
  },
  {
    color: "#d1199f",
    name: "Raina Thirst",
    avatar: "https://robohash.org/facerequiqui.png?size=50x50&set=set1",
    university: "Nakamura Gakuen University",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "rthirsto@ehow.com",
  },
  {
    color: "#4c3bab",
    name: "Elliot Mirrlees",
    avatar:
      "https://robohash.org/corporiseumlaboriosam.png?size=50x50&set=set1",
    university: "Fuzhou University",
    sentences:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "emirrleesp@ning.com",
  },
  {
    color: "#b557e7",
    name: "Harri Beynon",
    avatar:
      "https://robohash.org/deseruntvoluptatesenim.png?size=50x50&set=set1",
    university: "Universität der Bundeswehr München",
    sentences:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    email: "hbeynonq@twitter.com",
  },
  {
    color: "#bd2071",
    name: "Zorina Yeskov",
    avatar: "https://robohash.org/sittemporibuset.png?size=50x50&set=set1",
    university: "Miyagi University of Education",
    sentences:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    email: "zyeskovr@smugmug.com",
  },
  {
    color: "#e3be9d",
    name: "Datha Wellings",
    avatar:
      "https://robohash.org/molestiaedictainventore.png?size=50x50&set=set1",
    university: "Universidad Antonio Nariño",
    sentences: "Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "dwellingss@sakura.ne.jp",
  },
  {
    color: "#2b9e1f",
    name: "Kimberly Claworth",
    avatar:
      "https://robohash.org/velitconsequunturrerum.png?size=50x50&set=set1",
    university: "Europa Fachhochschule Fresenius",
    sentences:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
    email: "kclawortht@freewebs.com",
  },
  {
    color: "#63eb74",
    name: "Germana Neath",
    avatar:
      "https://robohash.org/occaecativoluptatemvoluptatibus.png?size=50x50&set=set1",
    university: "Mahatma Phule Agricultural University",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    email: "gneathu@deliciousdays.com",
  },
  {
    color: "#e4c62a",
    name: "Ruthanne Luckham",
    avatar: "https://robohash.org/utdoloremrerum.png?size=50x50&set=set1",
    university: "Muadzam Shah Polytechnic",
    sentences:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    email: "rluckhamv@blog.com",
  },
  {
    color: "#f3f30a",
    name: "Sheila-kathryn Hawksby",
    avatar: "https://robohash.org/aliasminusnisi.png?size=50x50&set=set1",
    university: "University of Pecs",
    sentences:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    email: "shawksbyw@huffingtonpost.com",
  },
  {
    color: "#537300",
    name: "Chevalier Di Maggio",
    avatar:
      "https://robohash.org/voluptatemodioveritatis.png?size=50x50&set=set1",
    university: "Bethel College Newton",
    sentences:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "cdix@de.vu",
  },
  {
    color: "#7de9d3",
    name: "Mareah Hessentaler",
    avatar: "https://robohash.org/commodiillovoluptas.png?size=50x50&set=set1",
    university: "Mzuzu University",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    email: "mhessentalery@webnode.com",
  },
  {
    color: "#81f820",
    name: "Rosemaria Easton",
    avatar:
      "https://robohash.org/reprehenderitnonconsectetur.png?size=50x50&set=set1",
    university: "University of Maryland Baltimore County",
    sentences:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "reastonz@wordpress.com",
  },
  {
    color: "#0ccbb6",
    name: "Cletus Gerardot",
    avatar:
      "https://robohash.org/fugiataccusantiumomnis.png?size=50x50&set=set1",
    university: "Universidad Adventista de Bolivia",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    email: "cgerardot10@intel.com",
  },
  {
    color: "#87320a",
    name: "Zita Gert",
    avatar: "https://robohash.org/optioremrepellat.png?size=50x50&set=set1",
    university: "Institute of Teachers Education, Raja Melewar",
    sentences:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "zgert11@github.io",
  },
  {
    color: "#4a5861",
    name: "Jaimie Kleinfeld",
    avatar: "https://robohash.org/esseidquam.png?size=50x50&set=set1",
    university: "Barton College",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "jkleinfeld12@e-recht24.de",
  },
  {
    color: "#815180",
    name: "Orin McLuckie",
    avatar:
      "https://robohash.org/quospraesentiumvoluptatibus.png?size=50x50&set=set1",
    university: "Universidade Federal de Viçosa",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    email: "omcluckie13@yahoo.com",
  },
  {
    color: "#671eb8",
    name: "Nicolle Edgerly",
    avatar:
      "https://robohash.org/nisilaudantiumdolores.png?size=50x50&set=set1",
    university: "Simon's Rock College",
    sentences:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "nedgerly14@ehow.com",
  },
  {
    color: "#2d2256",
    name: "Arden Bakster",
    avatar: "https://robohash.org/voluptatumiustoneque.png?size=50x50&set=set1",
    university: "South University of Science and Technology of China ",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "abakster15@blogger.com",
  },
  {
    color: "#721a0a",
    name: "Westbrooke De Lisle",
    avatar: "https://robohash.org/praesentiuminqui.png?size=50x50&set=set1",
    university: "Sohar University",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "wde16@newsvine.com",
  },
  {
    color: "#94a6d6",
    name: "Rhoda Leglise",
    avatar: "https://robohash.org/voluptasnumquamvelit.png?size=50x50&set=set1",
    university: "Université d'Alger 3",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    email: "rleglise17@networksolutions.com",
  },
  {
    color: "#7da8ab",
    name: "Laural Mowlam",
    avatar:
      "https://robohash.org/repudiandaepariatursed.png?size=50x50&set=set1",
    university: "University of the Southern Caribbean",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    email: "lmowlam18@pbs.org",
  },
  {
    color: "#3737d2",
    name: "Myrah Sisse",
    avatar:
      "https://robohash.org/eligendimagnamvoluptas.png?size=50x50&set=set1",
    university: "Osaka Institute of Technology",
    sentences: "Morbi a ipsum. Integer a nibh.",
    email: "msisse19@exblog.jp",
  },
  {
    color: "#ceabe3",
    name: "Yetty Wingeatt",
    avatar:
      "https://robohash.org/sedrepellendusveritatis.png?size=50x50&set=set1",
    university: "University of Mosul",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    email: "ywingeatt1a@stanford.edu",
  },
  {
    color: "#c92f46",
    name: "Neron McCowen",
    avatar: "https://robohash.org/sitsolutaenim.png?size=50x50&set=set1",
    university: "Dr. Panjabrao Deshmukh Krishi Vidyapeeth",
    sentences:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "nmccowen1b@answers.com",
  },
  {
    color: "#cf3eb6",
    name: "Fairleigh McIntee",
    avatar: "https://robohash.org/sintminusaut.png?size=50x50&set=set1",
    university: "Illinois Benedictine University",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    email: "fmcintee1c@cdc.gov",
  },
  {
    color: "#997f48",
    name: "Javier Garmey",
    avatar: "https://robohash.org/deseruntlaborequas.png?size=50x50&set=set1",
    university: "Dakota Wesleyan University",
    sentences:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "jgarmey1d@dot.gov",
  },
  {
    color: "#b94e11",
    name: "Silvio Izzett",
    avatar: "https://robohash.org/etinciduntveniam.png?size=50x50&set=set1",
    university: "Sebatian Kolowa University College",
    sentences:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    email: "sizzett1e@netvibes.com",
  },
  {
    color: "#f78ad0",
    name: "Tildie Aldam",
    avatar: "https://robohash.org/voluptatemquissint.png?size=50x50&set=set1",
    university: "Green University of Bangladesh",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    email: "taldam1f@example.com",
  },
  {
    color: "#79caac",
    name: "Pall Edmett",
    avatar: "https://robohash.org/estmaximeiure.png?size=50x50&set=set1",
    university: "University of Insubria",
    sentences: "Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    email: "pedmett1g@studiopress.com",
  },
  {
    color: "#c3bb30",
    name: "Consuela Menendes",
    avatar: "https://robohash.org/quiamollitiasint.png?size=50x50&set=set1",
    university: "Kwassui Women's College",
    sentences:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    email: "cmenendes1h@sogou.com",
  },
  {
    color: "#a19bcc",
    name: "Dedie Losty",
    avatar: "https://robohash.org/doloribusesteligendi.png?size=50x50&set=set1",
    university: "École de technologie supérieure, Université du Québec",
    sentences: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
    email: "dlosty1i@github.io",
  },
  {
    color: "#fcb9b2",
    name: "Sherlock Beddow",
    avatar:
      "https://robohash.org/itaqueexercitationemvelit.png?size=50x50&set=set1",
    university: "University of Veterinary & Animal Science",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    email: "sbeddow1j@simplemachines.org",
  },
  {
    color: "#1d0fd9",
    name: "Marcelline Marians",
    avatar: "https://robohash.org/quilaboreearum.png?size=50x50&set=set1",
    university: "Institute of Teachers Education, Penang",
    sentences:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "mmarians1k@cdbaby.com",
  },
  {
    color: "#268680",
    name: "Atlanta Rudman",
    avatar: "https://robohash.org/beataepossimuscumque.png?size=50x50&set=set1",
    university: "Urmia University of Technology",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "arudman1l@github.com",
  },
  {
    color: "#c3da9e",
    name: "Betta Dies",
    avatar: "https://robohash.org/auteosdolorem.png?size=50x50&set=set1",
    university: "Hiroshima Institute of Technology",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    email: "bdies1m@utexas.edu",
  },
  {
    color: "#2755b9",
    name: "Lindi Rangeley",
    avatar: "https://robohash.org/quismagnamreiciendis.png?size=50x50&set=set1",
    university: "South China Agricultural University",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    email: "lrangeley1n@latimes.com",
  },
  {
    color: "#7d5e68",
    name: "Tabatha Towers",
    avatar: "https://robohash.org/quimolestiaeet.png?size=50x50&set=set1",
    university: "Kamrah International Institute of Technology (KIIT)",
    sentences:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "ttowers1o@mashable.com",
  },
  {
    color: "#638d83",
    name: "Archibaldo Bloggett",
    avatar: "https://robohash.org/dolorequiqui.png?size=50x50&set=set1",
    university: "Universidad Nacional de Piura",
    sentences:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    email: "abloggett1p@cpanel.net",
  },
  {
    color: "#a32d97",
    name: "Danya Bernardt",
    avatar: "https://robohash.org/autrationeaut.png?size=50x50&set=set1",
    university: "Roberts Wesleyan College",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    email: "dbernardt1q@irs.gov",
  },
  {
    color: "#8571ba",
    name: "Sholom Bidgod",
    avatar: "https://robohash.org/fugaestvoluptatem.png?size=50x50&set=set1",
    university: "Konan Women's University",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    email: "sbidgod1r@biglobe.ne.jp",
  },
  {
    color: "#411213",
    name: "Lib MacGhee",
    avatar:
      "https://robohash.org/solutapossimuseveniet.png?size=50x50&set=set1",
    university: "Hannan University",
    sentences:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "lmacghee1s@huffingtonpost.com",
  },
  {
    color: "#4a3fc8",
    name: "Leonardo Spellward",
    avatar:
      "https://robohash.org/dictareprehenderitiure.png?size=50x50&set=set1",
    university: "Ecole Centrale de Lille",
    sentences: "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    email: "lspellward1t@friendfeed.com",
  },
  {
    color: "#080542",
    name: "Maddalena Staresmeare",
    avatar: "https://robohash.org/ineosimpedit.png?size=50x50&set=set1",
    university: "Hope College",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "mstaresmeare1u@shutterfly.com",
  },
  {
    color: "#de2969",
    name: "Deeyn McAsgill",
    avatar: "https://robohash.org/quomolestiaedolor.png?size=50x50&set=set1",
    university: "Abant Izzet Baysal University",
    sentences: "Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    email: "dmcasgill1v@jigsy.com",
  },
  {
    color: "#7c2e12",
    name: "Iolanthe Tourner",
    avatar: "https://robohash.org/eosestplaceat.png?size=50x50&set=set1",
    university: "Technical University of Civil Engineering Bucharest",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "itourner1w@paginegialle.it",
  },
  {
    color: "#da4557",
    name: "Agna Jobes",
    avatar: "https://robohash.org/utetfugiat.png?size=50x50&set=set1",
    university: "Institute of Public Administration",
    sentences:
      "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    email: "ajobes1x@barnesandnoble.com",
  },
  {
    color: "#71c672",
    name: "Andra Danaher",
    avatar:
      "https://robohash.org/quodvoluptatesmolestiae.png?size=50x50&set=set1",
    university: "Universidad Autónoma de Guadalajara",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    email: "adanaher1y@oracle.com",
  },
  {
    color: "#262c09",
    name: "Jacques Ellwell",
    avatar: "https://robohash.org/enimvoluptatesaut.png?size=50x50&set=set1",
    university: "Trevecca Nazarene University",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "jellwell1z@state.tx.us",
  },
  {
    color: "#fd41e4",
    name: "Gibby Stife",
    avatar: "https://robohash.org/ducimusfugitqui.png?size=50x50&set=set1",
    university: "North-West State Technical University",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "gstife20@mozilla.com",
  },
  {
    color: "#ce1834",
    name: "Chester Becket",
    avatar: "https://robohash.org/quasmodivoluptatem.png?size=50x50&set=set1",
    university:
      "Ecole des Hautes Etudes en Gestion Informatique et Communication",
    sentences:
      "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    email: "cbecket21@e-recht24.de",
  },
  {
    color: "#42ee45",
    name: "Ax Cathcart",
    avatar: "https://robohash.org/esteosperferendis.png?size=50x50&set=set1",
    university: "Kansai University of International Studies",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    email: "acathcart22@sogou.com",
  },
  {
    color: "#95ad08",
    name: "Kania Epps",
    avatar: "https://robohash.org/voluptatemdoloresut.png?size=50x50&set=set1",
    university: "Rasmussen College",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    email: "kepps23@istockphoto.com",
  },
  {
    color: "#06ca02",
    name: "Dominga MacDiarmond",
    avatar: "https://robohash.org/animiiustovoluptas.png?size=50x50&set=set1",
    university: "Uva Wellassa University",
    sentences:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    email: "dmacdiarmond24@blogtalkradio.com",
  },
  {
    color: "#ced0d4",
    name: "Hadlee Le Clercq",
    avatar: "https://robohash.org/aliquidnonaccusamus.png?size=50x50&set=set1",
    university: "Kermanshah University of Technology",
    sentences:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    email: "hle25@sitemeter.com",
  },
  {
    color: "#1a1252",
    name: "Vicky Mahy",
    avatar:
      "https://robohash.org/nesciuntporroblanditiis.png?size=50x50&set=set1",
    university: "Islamic Azad University, Majlesi",
    sentences:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    email: "vmahy26@bandcamp.com",
  },
  {
    color: "#0abce7",
    name: "Langsdon Talboy",
    avatar: "https://robohash.org/quimollitiabeatae.png?size=50x50&set=set1",
    university: "Swinburne University of Technology",
    sentences:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "ltalboy27@imgur.com",
  },
  {
    color: "#c797b1",
    name: "Thane Olivello",
    avatar: "https://robohash.org/quasiisteanimi.png?size=50x50&set=set1",
    university: "Mountain View College",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    email: "tolivello28@howstuffworks.com",
  },
  {
    color: "#ba9647",
    name: "Deanna De Clairmont",
    avatar: "https://robohash.org/laboriosamidquaerat.png?size=50x50&set=set1",
    university: "Universidad Nacional Jorge Basadre Grohmann",
    sentences: "Curabitur gravida nisi at nibh.",
    email: "dde29@ovh.net",
  },
  {
    color: "#c0bbce",
    name: "Graig Woffenden",
    avatar:
      "https://robohash.org/necessitatibusmaximesunt.png?size=50x50&set=set1",
    university: "Nebraska Methodist College of Nursing and Allied Health",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    email: "gwoffenden2a@twitter.com",
  },
  {
    color: "#b4762b",
    name: "Hodge Madelin",
    avatar: "https://robohash.org/vitaeoditaliquid.png?size=50x50&set=set1",
    university: "Mar Athanasios College for Advanced Studies",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    email: "hmadelin2b@hugedomains.com",
  },
  {
    color: "#6c3ec6",
    name: "Kaye Bartolijn",
    avatar: "https://robohash.org/enimatquenumquam.png?size=50x50&set=set1",
    university: "Fachhochschule Brandenburg",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    email: "kbartolijn2c@theatlantic.com",
  },
  {
    color: "#5f663a",
    name: "Reamonn Wimp",
    avatar: "https://robohash.org/eaquevoluptasaliquid.png?size=50x50&set=set1",
    university: "Bahrain Polytechnic",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    email: "rwimp2d@unesco.org",
  },
  {
    color: "#605ce9",
    name: "Christophorus Burwin",
    avatar: "https://robohash.org/fugitrerumsuscipit.png?size=50x50&set=set1",
    university: "Courtauld Institute of Art, University of London",
    sentences: "Pellentesque eget nunc.",
    email: "cburwin2e@mozilla.org",
  },
  {
    color: "#a13f7b",
    name: "Rowen Cavalier",
    avatar:
      "https://robohash.org/reprehenderitdoloremquenumquam.png?size=50x50&set=set1",
    university: "Manchester College",
    sentences:
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    email: "rcavalier2f@msn.com",
  },
  {
    color: "#428fe8",
    name: "Catarina Tremmil",
    avatar:
      "https://robohash.org/voluptatibusrepellatveniam.png?size=50x50&set=set1",
    university: "Universitas Padjadjaran",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    email: "ctremmil2g@washingtonpost.com",
  },
  {
    color: "#32209a",
    name: "Isac De La Hay",
    avatar: "https://robohash.org/rerumcommodinostrum.png?size=50x50&set=set1",
    university: "University of Central Missouri",
    sentences:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "ide2h@biglobe.ne.jp",
  },
  {
    color: "#e9e2fb",
    name: "Jeremy Mairs",
    avatar: "https://robohash.org/temporefacilisnulla.png?size=50x50&set=set1",
    university: "Academy of Sports and Physical Training",
    sentences:
      "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    email: "jmairs2i@cam.ac.uk",
  },
  {
    color: "#d8d50e",
    name: "Wernher Haslewood",
    avatar: "https://robohash.org/utmaioresmollitia.png?size=50x50&set=set1",
    university: "Jomo Kenyatta University of Agriculture and Technology",
    sentences:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    email: "whaslewood2j@purevolume.com",
  },
  {
    color: "#553b0f",
    name: "Amery Saltsberg",
    avatar: "https://robohash.org/idquorepellendus.png?size=50x50&set=set1",
    university: "Rochester College",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    email: "asaltsberg2k@slate.com",
  },
  {
    color: "#13ca9a",
    name: "Muriel Smiths",
    avatar: "https://robohash.org/quibusdamvelest.png?size=50x50&set=set1",
    university: "Toyama Medical and Pharmaceutical University",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "msmiths2l@youtu.be",
  },
  {
    color: "#1d3bdb",
    name: "Urbain Piche",
    avatar:
      "https://robohash.org/aliquamdoloresveritatis.png?size=50x50&set=set1",
    university: "Dominican College of San Rafael",
    sentences:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    email: "upiche2m@soup.io",
  },
  {
    color: "#1d7c0b",
    name: "Nester Probart",
    avatar: "https://robohash.org/quaeetmolestiae.png?size=50x50&set=set1",
    university: "Ecole Nationale Supérieure de Chimie de Rennes",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    email: "nprobart2n@creativecommons.org",
  },
  {
    color: "#05ceaf",
    name: "Kit Shorbrook",
    avatar: "https://robohash.org/teneturmagnamvelit.png?size=50x50&set=set1",
    university: "Hanshin University",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    email: "kshorbrook2o@bizjournals.com",
  },
  {
    color: "#c742c3",
    name: "Llywellyn Hills",
    avatar: "https://robohash.org/eumenimaliquid.png?size=50x50&set=set1",
    university: "Mindanao State University - Iligan Institute of Technology",
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    email: "lhills2p@phpbb.com",
  },
  {
    color: "#8036d7",
    name: "Faydra Syde",
    avatar: "https://robohash.org/dolorumaspernatureum.png?size=50x50&set=set1",
    university: "Austin Peay State University",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    email: "fsyde2q@sphinn.com",
  },
  {
    color: "#7c5cb0",
    name: "Luisa Auchterlony",
    avatar: "https://robohash.org/idautdicta.png?size=50x50&set=set1",
    university: "Politécnico Grancolombiano - Institución Universitaria",
    sentences:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    email: "lauchterlony2r@themeforest.net",
  },
  {
    color: "#db6e67",
    name: "Rubina Sealey",
    avatar: "https://robohash.org/cumsedvoluptatem.png?size=50x50&set=set1",
    university: "Abai State University",
    sentences:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    email: "rsealey2s@printfriendly.com",
  },
  {
    color: "#3bed1a",
    name: "Sanders Powling",
    avatar: "https://robohash.org/quamaliquamdolorem.png?size=50x50&set=set1",
    university: "St. Olaf College",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    email: "spowling2t@jiathis.com",
  },
  {
    color: "#abf1b2",
    name: "Elfreda Hanner",
    avatar: "https://robohash.org/sintestet.png?size=50x50&set=set1",
    university: "Université d'Alger 3",
    sentences: "Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    email: "ehanner2u@craigslist.org",
  },
  {
    color: "#285cc2",
    name: "Emelda Tabard",
    avatar: "https://robohash.org/earumatquequi.png?size=50x50&set=set1",
    university: "Dongshin University",
    sentences:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    email: "etabard2v@google.pl",
  },
  {
    color: "#c13d82",
    name: "Sadella Rusted",
    avatar: "https://robohash.org/similiquevelitet.png?size=50x50&set=set1",
    university:
      "Richmond University - The American International University in London",
    sentences: "Etiam vel augue. Vestibulum rutrum rutrum neque.",
    email: "srusted2w@goo.ne.jp",
  },
  {
    color: "#111aa4",
    name: "Deedee Dwane",
    avatar: "https://robohash.org/seddelenitiqui.png?size=50x50&set=set1",
    university: "Gandhara Institute of Medical Sciences",
    sentences: "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    email: "ddwane2x@shareasale.com",
  },
  {
    color: "#eefa57",
    name: "Goraud Thorlby",
    avatar: "https://robohash.org/eumutmolestiae.png?size=50x50&set=set1",
    university: "Universidade Federal de Sergipe",
    sentences: "Maecenas rhoncus aliquam lacus.",
    email: "gthorlby2y@chronoengine.com",
  },
  {
    color: "#b66fc7",
    name: "Sophronia Kevane",
    avatar:
      "https://robohash.org/doloresvoluptatemprovident.png?size=50x50&set=set1",
    university: "FAE Business School - Faculdade de Administração e Economia",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    email: "skevane2z@wunderground.com",
  },
  {
    color: "#161597",
    name: "Lorilee Haggard",
    avatar: "https://robohash.org/dignissimosmodiporro.png?size=50x50&set=set1",
    university: "Kyushu Institute of Technology",
    sentences:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "lhaggard30@geocities.com",
  },
  {
    color: "#792c02",
    name: "Beret Steinson",
    avatar:
      "https://robohash.org/repellendusmolestiasqui.png?size=50x50&set=set1",
    university: "Nortre Dame Seishin University",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    email: "bsteinson31@stanford.edu",
  },
  {
    color: "#42bc90",
    name: "Zelda Tanser",
    avatar: "https://robohash.org/eumeligendisapiente.png?size=50x50&set=set1",
    university: "Seoul City University",
    sentences:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    email: "ztanser32@redcross.org",
  },
  {
    color: "#a36356",
    name: "Reynard Ledes",
    avatar: "https://robohash.org/eteumquos.png?size=50x50&set=set1",
    university: "International Colleges of Islamic Science",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    email: "rledes33@freewebs.com",
  },
  {
    color: "#e4ab21",
    name: "Feodora Osman",
    avatar: "https://robohash.org/undeetlaboriosam.png?size=50x50&set=set1",
    university: "Universitas Gadjah Mada",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    email: "fosman34@patch.com",
  },
  {
    color: "#ca3030",
    name: "Ranee Surplice",
    avatar: "https://robohash.org/nesciuntutdolores.png?size=50x50&set=set1",
    university: "Hebei University of Economics and Trade",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    email: "rsurplice35@surveymonkey.com",
  },
  {
    color: "#54cabe",
    name: "Ivory Cowins",
    avatar:
      "https://robohash.org/delenitiquidempossimus.png?size=50x50&set=set1",
    university: "University Institute of Oriental Studies",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "icowins36@istockphoto.com",
  },
  {
    color: "#e026a8",
    name: "Jenda Salmoni",
    avatar:
      "https://robohash.org/exercitationemillumhic.png?size=50x50&set=set1",
    university: "The College of Wooster",
    sentences:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    email: "jsalmoni37@github.io",
  },
  {
    color: "#45424a",
    name: "Angel Castelletti",
    avatar: "https://robohash.org/nullainciduntquis.png?size=50x50&set=set1",
    university: "University of Kashmir",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    email: "acastelletti38@nba.com",
  },
  {
    color: "#886f4b",
    name: "Claudetta Kitchingman",
    avatar:
      "https://robohash.org/quibusdamaliquamlaboriosam.png?size=50x50&set=set1",
    university: "Université d'Antsiranana",
    sentences: "Sed ante. Vivamus tortor.",
    email: "ckitchingman39@statcounter.com",
  },
  {
    color: "#461aae",
    name: "Bobine Paik",
    avatar: "https://robohash.org/ipsaautiste.png?size=50x50&set=set1",
    university: "Marist College",
    sentences:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    email: "bpaik3a@qq.com",
  },
  {
    color: "#e15b44",
    name: "Rasla Akroyd",
    avatar:
      "https://robohash.org/utarchitectocupiditate.png?size=50x50&set=set1",
    university: "Southern Methodist University",
    sentences:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    email: "rakroyd3b@sakura.ne.jp",
  },
  {
    color: "#e6ed2b",
    name: "Moises Schreurs",
    avatar: "https://robohash.org/iddeseruntqui.png?size=50x50&set=set1",
    university: "Stenden University",
    sentences:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "mschreurs3c@deviantart.com",
  },
  {
    color: "#a5b657",
    name: "Hedda Littefair",
    avatar: "https://robohash.org/etteneturquod.png?size=50x50&set=set1",
    university: "Universidad de Valencia",
    sentences:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "hlittefair3d@google.de",
  },
  {
    color: "#e499ba",
    name: "Kay Youthed",
    avatar:
      "https://robohash.org/architectoadipiscirepellat.png?size=50x50&set=set1",
    university: "South China Agricultural University",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    email: "kyouthed3e@blogspot.com",
  },
  {
    color: "#fbf47a",
    name: "Addia Ounsworth",
    avatar: "https://robohash.org/nemomollitiaporro.png?size=50x50&set=set1",
    university: "Blue Nile University",
    sentences:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "aounsworth3f@theatlantic.com",
  },
  {
    color: "#d3490c",
    name: "Kyle Tremberth",
    avatar: "https://robohash.org/doloremnonpariatur.png?size=50x50&set=set1",
    university: "Sheffield Hallam University",
    sentences:
      "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "ktremberth3g@pen.io",
  },
  {
    color: "#3e30b3",
    name: "Dee Grafham",
    avatar: "https://robohash.org/nemovelincidunt.png?size=50x50&set=set1",
    university: "Mahatma Phule Agricultural University",
    sentences:
      "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "dgrafham3h@npr.org",
  },
  {
    color: "#1b1677",
    name: "Delbert Tatters",
    avatar: "https://robohash.org/deseruntiustoiure.png?size=50x50&set=set1",
    university: "Kyrgyz Russian Slavic University",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "dtatters3i@theglobeandmail.com",
  },
  {
    color: "#22a1b7",
    name: "Deloris Kempton",
    avatar:
      "https://robohash.org/atqueconsequaturdolores.png?size=50x50&set=set1",
    university: "Lupane State University",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    email: "dkempton3j@nps.gov",
  },
  {
    color: "#ba4d10",
    name: "Ashlin Birney",
    avatar:
      "https://robohash.org/molestiaearchitectoipsa.png?size=50x50&set=set1",
    university: "Gallaudet University",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    email: "abirney3k@salon.com",
  },
  {
    color: "#da5b9a",
    name: "Irina McDool",
    avatar: "https://robohash.org/utetqui.png?size=50x50&set=set1",
    university: "Iwate Prefectural University",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    email: "imcdool3l@foxnews.com",
  },
  {
    color: "#2150be",
    name: "Janaye Oxtoby",
    avatar: "https://robohash.org/quassaepequia.png?size=50x50&set=set1",
    university: "Universidad de Celaya",
    sentences:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    email: "joxtoby3m@google.co.jp",
  },
  {
    color: "#d2c41e",
    name: "Karel Mitkin",
    avatar: "https://robohash.org/sintetesse.png?size=50x50&set=set1",
    university: "Universidad Metropolitana",
    sentences: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    email: "kmitkin3n@theatlantic.com",
  },
  {
    color: "#873375",
    name: "Reinaldos Roswarne",
    avatar: "https://robohash.org/molestiaesedaut.png?size=50x50&set=set1",
    university: "Institución Universitaria Iberoamericana",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "rroswarne3o@indiegogo.com",
  },
  {
    color: "#570bc1",
    name: "Esma Pain",
    avatar: "https://robohash.org/quiaquiculpa.png?size=50x50&set=set1",
    university: "Sinnar University",
    sentences: "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "epain3p@howstuffworks.com",
  },
  {
    color: "#bf9344",
    name: "Priscella Bullion",
    avatar: "https://robohash.org/etvoluptatemnisi.png?size=50x50&set=set1",
    university: "Jai Narayan Vyas University",
    sentences:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "pbullion3q@apache.org",
  },
  {
    color: "#aeee39",
    name: "Verna Jupe",
    avatar:
      "https://robohash.org/estreiciendisarchitecto.png?size=50x50&set=set1",
    university: "Doho University",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    email: "vjupe3r@chronoengine.com",
  },
  {
    color: "#e3bd09",
    name: "Zacharias Guidotti",
    avatar: "https://robohash.org/molestiaedolorhic.png?size=50x50&set=set1",
    university: "Fachhochschule Kärnten",
    sentences:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    email: "zguidotti3s@xing.com",
  },
  {
    color: "#b6bc17",
    name: "Reinhard Machan",
    avatar: "https://robohash.org/nihilutquis.png?size=50x50&set=set1",
    university: "Tibet Tibetan Medical College",
    sentences:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    email: "rmachan3t@domainmarket.com",
  },
  {
    color: "#658342",
    name: "Christin Seiler",
    avatar:
      "https://robohash.org/rationenihilvoluptatem.png?size=50x50&set=set1",
    university: "Gustavus Adolphus College",
    sentences:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    email: "cseiler3u@fda.gov",
  },
  {
    color: "#e5b208",
    name: "Abel De Stoop",
    avatar: "https://robohash.org/etdoloribusanimi.png?size=50x50&set=set1",
    university: "Central Connecticut State University",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "ade3v@si.edu",
  },
  {
    color: "#06ff48",
    name: "Mata Tezure",
    avatar:
      "https://robohash.org/velconsequaturmolestias.png?size=50x50&set=set1",
    university: "University for Humanistics (UH)",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    email: "mtezure3w@example.com",
  },
  {
    color: "#72fbe9",
    name: "Sigfrid Deverell",
    avatar: "https://robohash.org/teneturenimqui.png?size=50x50&set=set1",
    university: "University of Alaska - Southeast",
    sentences:
      "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    email: "sdeverell3x@gizmodo.com",
  },
  {
    color: "#e1593a",
    name: "Caryl Hurlin",
    avatar: "https://robohash.org/autdeseruntrerum.png?size=50x50&set=set1",
    university: "Purdue University North Central",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    email: "churlin3y@over-blog.com",
  },
  {
    color: "#da501b",
    name: "Fernando Barlee",
    avatar: "https://robohash.org/beataequasirerum.png?size=50x50&set=set1",
    university: "Sri Venkateswara Institute of Medical Sciences",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    email: "fbarlee3z@webeden.co.uk",
  },
  {
    color: "#8589fc",
    name: "Domenic Osbaldstone",
    avatar: "https://robohash.org/commodimaximefugiat.png?size=50x50&set=set1",
    university: "Kursk State Medical University",
    sentences: "Curabitur gravida nisi at nibh.",
    email: "dosbaldstone40@ucla.edu",
  },
  {
    color: "#6b76f0",
    name: "Sal Brant",
    avatar:
      "https://robohash.org/veritatisrecusandaeipsam.png?size=50x50&set=set1",
    university: "Université de Montréal",
    sentences:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "sbrant41@mac.com",
  },
  {
    color: "#f8bb03",
    name: "Novelia Knibb",
    avatar: "https://robohash.org/laboretotamaut.png?size=50x50&set=set1",
    university: "Yeungnam University",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    email: "nknibb42@themeforest.net",
  },
  {
    color: "#564376",
    name: "Nigel Emanuelov",
    avatar: "https://robohash.org/culpaquaeratnumquam.png?size=50x50&set=set1",
    university: "Universitas Tarumanagara",
    sentences: "Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    email: "nemanuelov43@sogou.com",
  },
  {
    color: "#de189f",
    name: "Cele Whitland",
    avatar: "https://robohash.org/reiciendisfugitea.png?size=50x50&set=set1",
    university: "Centro Universitário Barao de Maua",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    email: "cwhitland44@go.com",
  },
  {
    color: "#53f25d",
    name: "Veronike Mayhou",
    avatar:
      "https://robohash.org/velitmollitiablanditiis.png?size=50x50&set=set1",
    university: "University of Szczecin",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    email: "vmayhou45@home.pl",
  },
  {
    color: "#1ef272",
    name: "Pavel Arnaut",
    avatar: "https://robohash.org/nostrumestet.png?size=50x50&set=set1",
    university: "Universidad Antonio de Nebrija",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    email: "parnaut46@wikia.com",
  },
  {
    color: "#5d45eb",
    name: "Shelley Bourcq",
    avatar:
      "https://robohash.org/doloribusnecessitatibuscupiditate.png?size=50x50&set=set1",
    university: "St. Joseph's College of Maine",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    email: "sbourcq47@hugedomains.com",
  },
  {
    color: "#ef0a26",
    name: "Lurette Kyme",
    avatar:
      "https://robohash.org/sitnecessitatibuscupiditate.png?size=50x50&set=set1",
    university: "Universidad Regional Miguel Hidalgo",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    email: "lkyme48@seesaa.net",
  },
  {
    color: "#475c4d",
    name: "Micah Schaffel",
    avatar: "https://robohash.org/natusutmollitia.png?size=50x50&set=set1",
    university: "Université Paul Valéry (Montpellier III)",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    email: "mschaffel49@google.com.au",
  },
  {
    color: "#a208c8",
    name: "Melisent Stebbin",
    avatar:
      "https://robohash.org/molestiasofficiavelit.png?size=50x50&set=set1",
    university: "Dr. Bhim Rao Abdekar University",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    email: "mstebbin4a@amazonaws.com",
  },
  {
    color: "#c5814e",
    name: "Ingelbert Sammes",
    avatar: "https://robohash.org/laudantiumetdolores.png?size=50x50&set=set1",
    university: "Institut National des Sciences Appliquées de Lyon",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    email: "isammes4b@elegantthemes.com",
  },
  {
    color: "#a8faaa",
    name: "King Raiman",
    avatar: "https://robohash.org/maximevitaevoluptate.png?size=50x50&set=set1",
    university: "State Maritine Academy",
    sentences:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    email: "kraiman4c@wunderground.com",
  },
  {
    color: "#fbbf6e",
    name: "Clifford Lodder",
    avatar: "https://robohash.org/magnamblanditiisquo.png?size=50x50&set=set1",
    university: "Fujian Normal University",
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    email: "clodder4d@4shared.com",
  },
  {
    color: "#b8ee5b",
    name: "Sherman Dunphie",
    avatar: "https://robohash.org/iuresequiautem.png?size=50x50&set=set1",
    university: "Point Loma Nazarene College",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    email: "sdunphie4e@businessweek.com",
  },
  {
    color: "#1205a0",
    name: "Gustave Carnegie",
    avatar:
      "https://robohash.org/laudantiumducimussapiente.png?size=50x50&set=set1",
    university: "Universitas 17 Agustus 1945 Semarang",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "gcarnegie4f@amazonaws.com",
  },
  {
    color: "#48f5ce",
    name: "Maurizio Hubbart",
    avatar: "https://robohash.org/atquenostrumet.png?size=50x50&set=set1",
    university: "University of Derby",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    email: "mhubbart4g@gnu.org",
  },
  {
    color: "#19ad0c",
    name: "Averil Busby",
    avatar: "https://robohash.org/quianesciuntvoluptas.png?size=50x50&set=set1",
    university: "Hochschule Zittau/Görlitz (FH)",
    sentences:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    email: "abusby4h@google.es",
  },
  {
    color: "#ba5623",
    name: "Perri Argente",
    avatar:
      "https://robohash.org/doloribuspossimusexcepturi.png?size=50x50&set=set1",
    university: "Universitat Pompeu Fabra",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "pargente4i@goo.ne.jp",
  },
  {
    color: "#181695",
    name: "Hakeem Roxburgh",
    avatar: "https://robohash.org/nequeiureveniam.png?size=50x50&set=set1",
    university: "Osaka University of Economics & Law",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    email: "hroxburgh4j@merriam-webster.com",
  },
  {
    color: "#2b8daa",
    name: "Boniface Gommey",
    avatar: "https://robohash.org/praesentiumutin.png?size=50x50&set=set1",
    university: "Escuela de Administración de Negocios",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    email: "bgommey4k@hud.gov",
  },
  {
    color: "#64cb03",
    name: "Ainslie Espada",
    avatar: "https://robohash.org/rerumautsoluta.png?size=50x50&set=set1",
    university: "Université Sorbonne-Nouvelle (Paris III)",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    email: "aespada4l@github.io",
  },
  {
    color: "#506d40",
    name: "Bryana Harryman",
    avatar: "https://robohash.org/ametquiadipisci.png?size=50x50&set=set1",
    university: "Winthrop University",
    sentences:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    email: "bharryman4m@dedecms.com",
  },
  {
    color: "#cdf95c",
    name: "Octavia Houchin",
    avatar:
      "https://robohash.org/perspiciatisdoloressint.png?size=50x50&set=set1",
    university: "Punjab Technical University",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    email: "ohouchin4n@ucoz.ru",
  },
  {
    color: "#b45963",
    name: "Rodger Prandoni",
    avatar:
      "https://robohash.org/maioresvoluptatemincidunt.png?size=50x50&set=set1",
    university: "Southern Nazarene University",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    email: "rprandoni4o@hud.gov",
  },
  {
    color: "#dff159",
    name: "Nikola Slarke",
    avatar: "https://robohash.org/fugaeumvelit.png?size=50x50&set=set1",
    university: "NTI University",
    sentences:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    email: "nslarke4p@livejournal.com",
  },
  {
    color: "#916274",
    name: "Joelly Smullen",
    avatar:
      "https://robohash.org/magnamquiaconsequatur.png?size=50x50&set=set1",
    university: "Universidad Ciencias Comerciales",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "jsmullen4q@imageshack.us",
  },
  {
    color: "#41c43c",
    name: "Raddy Faudrie",
    avatar: "https://robohash.org/voluptatesquissit.png?size=50x50&set=set1",
    university: "Center for Humanistic Studies",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    email: "rfaudrie4r@php.net",
  },
  {
    color: "#0beaa9",
    name: "Earvin Cowdroy",
    avatar:
      "https://robohash.org/reprehenderitvoluptatibusamet.png?size=50x50&set=set1",
    university: "Ivanovo State University",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
    email: "ecowdroy4s@360.cn",
  },
  {
    color: "#e0bb9c",
    name: "Kakalina Tolliday",
    avatar: "https://robohash.org/explicabosaepesunt.png?size=50x50&set=set1",
    university: "American University in Dubai",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "ktolliday4t@studiopress.com",
  },
  {
    color: "#06135e",
    name: "Thom Yakushkin",
    avatar: "https://robohash.org/quoofficiisvoluptas.png?size=50x50&set=set1",
    university: "Universitas Mahasaraswati Denpasar",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
    email: "tyakushkin4u@economist.com",
  },
  {
    color: "#997696",
    name: "Carolyne Stanyer",
    avatar: "https://robohash.org/perferendisenimillum.png?size=50x50&set=set1",
    university: "Universidad Técnica de Babahoyo",
    sentences:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    email: "cstanyer4v@wix.com",
  },
  {
    color: "#edb4c7",
    name: "Marena Jeffrey",
    avatar: "https://robohash.org/eaquiminus.png?size=50x50&set=set1",
    university: "University of the Free State",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    email: "mjeffrey4w@plala.or.jp",
  },
  {
    color: "#09ef9c",
    name: "Eugenio Santo",
    avatar:
      "https://robohash.org/excepturitemporavoluptatem.png?size=50x50&set=set1",
    university: 'Universidad Tecnologica "Vicente Perez Rosales"',
    sentences: "Aenean auctor gravida sem.",
    email: "esanto4x@nps.gov",
  },
  {
    color: "#4ff4eb",
    name: "Diane Smullen",
    avatar: "https://robohash.org/perspiciatisnihilet.png?size=50x50&set=set1",
    university: "Pyongtaek University ",
    sentences:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    email: "dsmullen4y@vkontakte.ru",
  },
  {
    color: "#bb221a",
    name: "Essy Cavilla",
    avatar:
      "https://robohash.org/errorquisnecessitatibus.png?size=50x50&set=set1",
    university: "Northern Arizona University",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "ecavilla4z@cdbaby.com",
  },
  {
    color: "#bb0b27",
    name: "Levin Ruter",
    avatar: "https://robohash.org/adipisciutet.png?size=50x50&set=set1",
    university: "Technical University of Liberec",
    sentences:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    email: "lruter50@drupal.org",
  },
  {
    color: "#f538e8",
    name: "Nata Runnalls",
    avatar: "https://robohash.org/iurequianam.png?size=50x50&set=set1",
    university: "Nicolaus Copernicus University of Torun",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    email: "nrunnalls51@sbwire.com",
  },
  {
    color: "#012daa",
    name: "Fletch McAuley",
    avatar: "https://robohash.org/autsolutaqui.png?size=50x50&set=set1",
    university: "Texas A&M University",
    sentences: "Maecenas tincidunt lacus at velit.",
    email: "fmcauley52@prweb.com",
  },
  {
    color: "#1462a2",
    name: "Cleo Coutts",
    avatar: "https://robohash.org/insintut.png?size=50x50&set=set1",
    university: "Ferris State University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    email: "ccoutts53@sitemeter.com",
  },
  {
    color: "#763f12",
    name: "Atlanta McCumesky",
    avatar: "https://robohash.org/quiaeiusquibusdam.png?size=50x50&set=set1",
    university: "National Institute of the Arts",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    email: "amccumesky54@google.es",
  },
  {
    color: "#bd32ff",
    name: "Darby Henrique",
    avatar: "https://robohash.org/quiacupiditateet.png?size=50x50&set=set1",
    university: "Adam Mickiewicz University of Poznan",
    sentences: "Fusce consequat. Nulla nisl. Nunc nisl.",
    email: "dhenrique55@adobe.com",
  },
  {
    color: "#194845",
    name: "Latia D'Andrea",
    avatar: "https://robohash.org/nihileaquecumque.png?size=50x50&set=set1",
    university: "Institute of Teachers Education, Tun Hussein Onn",
    sentences:
      "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    email: "ldandrea56@rediff.com",
  },
  {
    color: "#e62149",
    name: "Harp Grimoldby",
    avatar:
      "https://robohash.org/doloribusquiseligendi.png?size=50x50&set=set1",
    university: "University of Wisconsin - Eau Claire",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    email: "hgrimoldby57@e-recht24.de",
  },
  {
    color: "#432f2b",
    name: "Bennie Trustey",
    avatar:
      "https://robohash.org/voluptatemdelectusipsum.png?size=50x50&set=set1",
    university: "Escuela Agricola Panamericana Zamorano",
    sentences:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    email: "btrustey58@nifty.com",
  },
  {
    color: "#d2eb3a",
    name: "Emmi Bloxsom",
    avatar:
      "https://robohash.org/laboriosamfuganostrum.png?size=50x50&set=set1",
    university: "Minsk Institute of Management",
    sentences:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    email: "ebloxsom59@hp.com",
  },
  {
    color: "#97ffb9",
    name: "Nixie Sherratt",
    avatar: "https://robohash.org/veniamfacereenim.png?size=50x50&set=set1",
    university: "East Kazakstan State Technical University",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    email: "nsherratt5a@dion.ne.jp",
  },
  {
    color: "#990c04",
    name: "Serene Gioan",
    avatar: "https://robohash.org/quisliberoqui.png?size=50x50&set=set1",
    university: "Nordic School of Public Health",
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    email: "sgioan5b@123-reg.co.uk",
  },
  {
    color: "#7be9d3",
    name: "Richard Toping",
    avatar: "https://robohash.org/illumofficiaquaerat.png?size=50x50&set=set1",
    university: "Fachhochschule Flensburg",
    sentences:
      "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "rtoping5c@paginegialle.it",
  },
  {
    color: "#933dbc",
    name: "Redford Rottger",
    avatar: "https://robohash.org/inenimnisi.png?size=50x50&set=set1",
    university: "Fukui Prefectural University",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    email: "rrottger5d@hp.com",
  },
  {
    color: "#77fb65",
    name: "Angie Gardener",
    avatar: "https://robohash.org/etinciduntet.png?size=50x50&set=set1",
    university: "Royal Academy of Music",
    sentences: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
    email: "agardener5e@microsoft.com",
  },
  {
    color: "#e507a7",
    name: "Cammi Caban",
    avatar: "https://robohash.org/quosvoluptatumquae.png?size=50x50&set=set1",
    university: "University of Italian Studies for Foreigners of Siena",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
    email: "ccaban5f@github.com",
  },
  {
    color: "#e0e554",
    name: "Jehanna Kinsell",
    avatar: "https://robohash.org/etvoluptatemet.png?size=50x50&set=set1",
    university: "South China Agricultural University",
    sentences: "Integer non velit.",
    email: "jkinsell5g@slashdot.org",
  },
  {
    color: "#b0db5e",
    name: "Iver Jouning",
    avatar: "https://robohash.org/autaccusamusculpa.png?size=50x50&set=set1",
    university:
      "Private Universität für Medizinische Informatik und Technik Tirol",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    email: "ijouning5h@i2i.jp",
  },
  {
    color: "#ef6b55",
    name: "Modestia Mound",
    avatar:
      "https://robohash.org/consecteturfacerevoluptate.png?size=50x50&set=set1",
    university: "Atatürk University",
    sentences:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    email: "mmound5i@hugedomains.com",
  },
  {
    color: "#21cc42",
    name: "Clarence Chittem",
    avatar: "https://robohash.org/esserepudiandaetotam.png?size=50x50&set=set1",
    university: "Knoxville College",
    sentences:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "cchittem5j@oracle.com",
  },
  {
    color: "#b4a966",
    name: "Bobbee Beany",
    avatar: "https://robohash.org/consequatursintdolor.png?size=50x50&set=set1",
    university: "Qafqaz University",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    email: "bbeany5k@gravatar.com",
  },
  {
    color: "#ae7a71",
    name: "Silvan Cartmael",
    avatar: "https://robohash.org/debitissapientererum.png?size=50x50&set=set1",
    university: "Universiti Malaysia Perlis",
    sentences:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    email: "scartmael5l@go.com",
  },
  {
    color: "#1ce94b",
    name: "Maurita Clewett",
    avatar:
      "https://robohash.org/quiaaccusantiumlaborum.png?size=50x50&set=set1",
    university: "Kirkwood Community College",
    sentences: "Nulla tempus.",
    email: "mclewett5m@illinois.edu",
  },
  {
    color: "#22588c",
    name: "Harland Graine",
    avatar: "https://robohash.org/natusdistinctioenim.png?size=50x50&set=set1",
    university: "Clark University",
    sentences:
      "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    email: "hgraine5n@google.com.br",
  },
  {
    color: "#2b54f5",
    name: "Amargo Earles",
    avatar:
      "https://robohash.org/voluptasaperiamnumquam.png?size=50x50&set=set1",
    university: "Novosibirsk State University",
    sentences: "Sed ante. Vivamus tortor.",
    email: "aearles5o@wikia.com",
  },
  {
    color: "#798327",
    name: "Kittie Sconce",
    avatar: "https://robohash.org/solutasuntet.png?size=50x50&set=set1",
    university: "Aristotle University of Thessaloniki",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "ksconce5p@jimdo.com",
  },
  {
    color: "#7a34bc",
    name: "Chrisse Menham",
    avatar: "https://robohash.org/saepeexplicaboet.png?size=50x50&set=set1",
    university: "Pomorsk State University",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    email: "cmenham5q@g.co",
  },
  {
    color: "#625f1b",
    name: "Davita Grice",
    avatar: "https://robohash.org/molestiasveleaque.png?size=50x50&set=set1",
    university: "Shreemati Nathibai Damodar Thackersey Women's University",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    email: "dgrice5r@sourceforge.net",
  },
  {
    color: "#a66c39",
    name: "Kenton Keaves",
    avatar: "https://robohash.org/porromolestiaemodi.png?size=50x50&set=set1",
    university: "Virginia Intermont College",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    email: "kkeaves5s@dailymail.co.uk",
  },
  {
    color: "#e3f2b9",
    name: "Jackson Czajkowska",
    avatar:
      "https://robohash.org/consequaturseddolorum.png?size=50x50&set=set1",
    university: "Vologda State Pedagogical University",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    email: "jczajkowska5t@skyrock.com",
  },
  {
    color: "#80fa84",
    name: "Alphard Ferrarotti",
    avatar: "https://robohash.org/harumimpeditquia.png?size=50x50&set=set1",
    university: "Assosa University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    email: "aferrarotti5u@indiegogo.com",
  },
  {
    color: "#02c0aa",
    name: "Brenna Palatini",
    avatar: "https://robohash.org/perspiciatisquisest.png?size=50x50&set=set1",
    university: "Alexandria University",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    email: "bpalatini5v@mlb.com",
  },
  {
    color: "#8d1663",
    name: "Nicko Ingram",
    avatar: "https://robohash.org/estdebitisdeleniti.png?size=50x50&set=set1",
    university: "Free University of Tbilisi",
    sentences: "Nulla nisl.",
    email: "ningram5w@csmonitor.com",
  },
  {
    color: "#63af95",
    name: "Selma Breche",
    avatar:
      "https://robohash.org/omnisnonreprehenderit.png?size=50x50&set=set1",
    university: "University of South Africa",
    sentences:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    email: "sbreche5x@spotify.com",
  },
  {
    color: "#2c55e6",
    name: "Lenette Di Pietro",
    avatar: "https://robohash.org/etpossimusaut.png?size=50x50&set=set1",
    university: "Universidad Tecnológica Centroamericana",
    sentences:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    email: "ldi5y@bluehost.com",
  },
  {
    color: "#a13405",
    name: "Ferdinand Esp",
    avatar: "https://robohash.org/utmollitianon.png?size=50x50&set=set1",
    university: "Fukuyama University",
    sentences: "Etiam faucibus cursus urna.",
    email: "fesp5z@bluehost.com",
  },
  {
    color: "#fc35ab",
    name: "Rockie Andrivot",
    avatar: "https://robohash.org/autillumerror.png?size=50x50&set=set1",
    university: "Seoul National University",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    email: "randrivot60@hostgator.com",
  },
  {
    color: "#5b6165",
    name: "Maddie Kinlock",
    avatar: "https://robohash.org/sitdebitisomnis.png?size=50x50&set=set1",
    university: "Universidade Estadual do Piauí",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    email: "mkinlock61@blogger.com",
  },
  {
    color: "#2d4f45",
    name: "Del Huxter",
    avatar: "https://robohash.org/liberoametest.png?size=50x50&set=set1",
    university: "Universidad del Valle de Guatemala",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    email: "dhuxter62@howstuffworks.com",
  },
  {
    color: "#64939b",
    name: "Marci Hantusch",
    avatar: "https://robohash.org/quiaquosest.png?size=50x50&set=set1",
    university: "University of Central Missouri",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    email: "mhantusch63@list-manage.com",
  },
  {
    color: "#32a4eb",
    name: "Donovan Lanney",
    avatar:
      "https://robohash.org/praesentiumlaborumporro.png?size=50x50&set=set1",
    university: "Northeastern University",
    sentences: "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "dlanney64@sciencedirect.com",
  },
  {
    color: "#871a3a",
    name: "Aloysia Tort",
    avatar: "https://robohash.org/quiacommodi.png?size=50x50&set=set1",
    university: "University of Indianapolis",
    sentences:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "atort65@google.com.au",
  },
  {
    color: "#8bf79a",
    name: "Brewer Fogarty",
    avatar: "https://robohash.org/dolorerepellendusnon.png?size=50x50&set=set1",
    university: "St. Augustine International University",
    sentences:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    email: "bfogarty66@list-manage.com",
  },
  {
    color: "#72ae49",
    name: "Brok Bwye",
    avatar: "https://robohash.org/aliassaepequod.png?size=50x50&set=set1",
    university: "Institute of Business & Technology",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    email: "bbwye67@opera.com",
  },
  {
    color: "#ecda99",
    name: "Petey D'Agostino",
    avatar: "https://robohash.org/faceredoloret.png?size=50x50&set=set1",
    university: "COMSATS Institute of Information Technology, Attock",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    email: "pdagostino68@marriott.com",
  },
  {
    color: "#676360",
    name: "Stephie Bygrave",
    avatar: "https://robohash.org/voluptatemquiaesse.png?size=50x50&set=set1",
    university: "Henan Univeristy",
    sentences:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    email: "sbygrave69@shinystat.com",
  },
  {
    color: "#d6482d",
    name: "Candis Fleischer",
    avatar:
      "https://robohash.org/iustoaspernaturminima.png?size=50x50&set=set1",
    university: "Universitat Autónoma de Barcelona",
    sentences:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    email: "cfleischer6a@marriott.com",
  },
  {
    color: "#2caaee",
    name: "Temple Gianullo",
    avatar:
      "https://robohash.org/beataedoloremqueearum.png?size=50x50&set=set1",
    university: "St.Cyril and Methodius University",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    email: "tgianullo6b@google.ru",
  },
  {
    color: "#f153c1",
    name: "Kelley Prosek",
    avatar: "https://robohash.org/ipsumerrorrerum.png?size=50x50&set=set1",
    university:
      "Kamalolmolk Art & Architecture Higher Education Institute of Noshahr",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    email: "kprosek6c@bloglines.com",
  },
  {
    color: "#b9f969",
    name: "Michaela de Quesne",
    avatar: "https://robohash.org/eumrerumaut.png?size=50x50&set=set1",
    university: "National University of Ireland, Maynooth",
    sentences:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "mde6d@squarespace.com",
  },
  {
    color: "#e20171",
    name: "Jean Coppen",
    avatar: "https://robohash.org/etdebitissint.png?size=50x50&set=set1",
    university: "Grodno State Agrarian University",
    sentences:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    email: "jcoppen6e@devhub.com",
  },
  {
    color: "#93620e",
    name: "Blair Oxer",
    avatar:
      "https://robohash.org/voluptatemsimiliqueipsum.png?size=50x50&set=set1",
    university: "Fuzhou University",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    email: "boxer6f@is.gd",
  },
  {
    color: "#5a52c4",
    name: "Eb Jouning",
    avatar: "https://robohash.org/omnisrecusandaeautem.png?size=50x50&set=set1",
    university: "Universidad Autónoma de Querétaro",
    sentences:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    email: "ejouning6g@cornell.edu",
  },
  {
    color: "#c2d579",
    name: "Olympie Rookwell",
    avatar: "https://robohash.org/quisquamnostrumiure.png?size=50x50&set=set1",
    university: "McKendree College",
    sentences: "In eleifend quam a odio.",
    email: "orookwell6h@ebay.co.uk",
  },
  {
    color: "#598e46",
    name: "Tait Hanmer",
    avatar: "https://robohash.org/automnisab.png?size=50x50&set=set1",
    university: "Islamic Azad University, Aliabad ",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    email: "thanmer6i@virginia.edu",
  },
  {
    color: "#1b203f",
    name: "Cleve Twinn",
    avatar: "https://robohash.org/utautemsequi.png?size=50x50&set=set1",
    university: "Chongqing University of Post and Telecommunications",
    sentences:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    email: "ctwinn6j@slideshare.net",
  },
  {
    color: "#b6ccaf",
    name: "Bernelle Foan",
    avatar: "https://robohash.org/velnonquae.png?size=50x50&set=set1",
    university: "George Brown College",
    sentences:
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    email: "bfoan6k@usda.gov",
  },
  {
    color: "#64e2d0",
    name: "Alli Stother",
    avatar: "https://robohash.org/inillumvitae.png?size=50x50&set=set1",
    university: "United States Merchant Marine Academy",
    sentences: "Suspendisse potenti.",
    email: "astother6l@cloudflare.com",
  },
  {
    color: "#9fe553",
    name: "Cathe Gallen",
    avatar: "https://robohash.org/quisdolorumeos.png?size=50x50&set=set1",
    university: "London Metropolitan University",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    email: "cgallen6m@artisteer.com",
  },
  {
    color: "#d64103",
    name: "Kari Pyatt",
    avatar:
      "https://robohash.org/temporibusaccusantiumdoloribus.png?size=50x50&set=set1",
    university: "University of Limerick",
    sentences:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    email: "kpyatt6n@spiegel.de",
  },
  {
    color: "#04215e",
    name: "Aylmar Marchant",
    avatar:
      "https://robohash.org/fugacupiditatedoloribus.png?size=50x50&set=set1",
    university: "University of Basrah",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "amarchant6o@tripod.com",
  },
  {
    color: "#a3b5c4",
    name: "Dominik Sheeran",
    avatar: "https://robohash.org/perferendislaborequo.png?size=50x50&set=set1",
    university: "Jamia Hamdard University",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    email: "dsheeran6p@jiathis.com",
  },
  {
    color: "#1a92e3",
    name: "Etta Tilby",
    avatar: "https://robohash.org/quiaomnisneque.png?size=50x50&set=set1",
    university: "Longwood College",
    sentences:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    email: "etilby6q@answers.com",
  },
  {
    color: "#223d9f",
    name: "Chelsy Taggart",
    avatar: "https://robohash.org/facerevelofficia.png?size=50x50&set=set1",
    university: "Saratov State Socio-Economic University",
    sentences:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    email: "ctaggart6r@hexun.com",
  },
  {
    color: "#4fb485",
    name: "Ossie Greenstock",
    avatar: "https://robohash.org/quaequinam.png?size=50x50&set=set1",
    university: "Philadelphia University",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    email: "ogreenstock6s@csmonitor.com",
  },
  {
    color: "#4055c1",
    name: "Stevena Owers",
    avatar:
      "https://robohash.org/quibusdamipsablanditiis.png?size=50x50&set=set1",
    university: "South Texas College of Law",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "sowers6t@mashable.com",
  },
  {
    color: "#710a33",
    name: "Ode Lindenman",
    avatar:
      "https://robohash.org/perspiciatisessemolestias.png?size=50x50&set=set1",
    university: "Iwaki Meisei University",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    email: "olindenman6u@opensource.org",
  },
  {
    color: "#78c9d5",
    name: "Benedikt Whitehall",
    avatar: "https://robohash.org/cumautfacere.png?size=50x50&set=set1",
    university: "Fachhochschule Mainz",
    sentences:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    email: "bwhitehall6v@blogtalkradio.com",
  },
  {
    color: "#5e6185",
    name: "Sullivan Winspar",
    avatar:
      "https://robohash.org/voluptatemeligendiblanditiis.png?size=50x50&set=set1",
    university: "Universidad del Pacifico",
    sentences:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    email: "swinspar6w@sakura.ne.jp",
  },
  {
    color: "#7960c9",
    name: "Melinda Crews",
    avatar: "https://robohash.org/maximeminimaodit.png?size=50x50&set=set1",
    university:
      "Tomsk State University of Control Systems and Radioelectronics",
    sentences:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "mcrews6x@weibo.com",
  },
  {
    color: "#ed94cd",
    name: "Gage Toulmin",
    avatar: "https://robohash.org/nostrumsitculpa.png?size=50x50&set=set1",
    university: "Universidad Privada Los Andes",
    sentences:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    email: "gtoulmin6y@berkeley.edu",
  },
  {
    color: "#636ecb",
    name: "Gabe Wall",
    avatar: "https://robohash.org/maximeatadipisci.png?size=50x50&set=set1",
    university: "Knowledge International University",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    email: "gwall6z@liveinternet.ru",
  },
  {
    color: "#16d37a",
    name: "Delores Penvarden",
    avatar: "https://robohash.org/animinondistinctio.png?size=50x50&set=set1",
    university: "Universidad Santa Fe",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "dpenvarden70@wordpress.com",
  },
  {
    color: "#062485",
    name: "Elenore Davioud",
    avatar: "https://robohash.org/voluptatetotamipsum.png?size=50x50&set=set1",
    university: "Universidad Monsenor Oscar Arnulfo Romeo",
    sentences: "Aliquam erat volutpat. In congue. Etiam justo.",
    email: "edavioud71@examiner.com",
  },
  {
    color: "#41e8e8",
    name: "Shelley Hawken",
    avatar: "https://robohash.org/magnisuntdignissimos.png?size=50x50&set=set1",
    university: "Jinnah University for Women",
    sentences:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
    email: "shawken72@umich.edu",
  },
  {
    color: "#853ee1",
    name: "Cornelius Dumingos",
    avatar:
      "https://robohash.org/doloresvoluptateminventore.png?size=50x50&set=set1",
    university: "God's Bible School and College",
    sentences: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
    email: "cdumingos73@intel.com",
  },
  {
    color: "#e67ab7",
    name: "Elie Ledeker",
    avatar: "https://robohash.org/aperiamearumsed.png?size=50x50&set=set1",
    university: "Nuclear Institute for Agriculture and Biology (NIAB)",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "eledeker74@xinhuanet.com",
  },
  {
    color: "#63cb86",
    name: "Carlita Bowlesworth",
    avatar: "https://robohash.org/sitnemoarchitecto.png?size=50x50&set=set1",
    university: "Jaypee Institute of Information Technology",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    email: "cbowlesworth75@aol.com",
  },
  {
    color: "#a54093",
    name: "Malissia Bugbee",
    avatar: "https://robohash.org/velessevoluptas.png?size=50x50&set=set1",
    university: "Southern University Bangladesh",
    sentences: "Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    email: "mbugbee76@amazonaws.com",
  },
  {
    color: "#7c1765",
    name: "Kristo Deegin",
    avatar: "https://robohash.org/aliasaspernaturet.png?size=50x50&set=set1",
    university: "Irkutsk State University",
    sentences:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    email: "kdeegin77@spotify.com",
  },
  {
    color: "#eab050",
    name: "Alric Niland",
    avatar:
      "https://robohash.org/nihilvoluptatemdolorem.png?size=50x50&set=set1",
    university:
      "Academy of International Economic and Political Relations, Gdynia",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    email: "aniland78@drupal.org",
  },
  {
    color: "#48be28",
    name: "Ware Shubotham",
    avatar:
      "https://robohash.org/voluptatumtenetursoluta.png?size=50x50&set=set1",
    university: "School of Management Fribourg",
    sentences:
      "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    email: "wshubotham79@whitehouse.gov",
  },
  {
    color: "#639a9e",
    name: "Fernanda Burbidge",
    avatar: "https://robohash.org/sedbeataedolorum.png?size=50x50&set=set1",
    university: "Technical University of Varna",
    sentences:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "fburbidge7a@simplemachines.org",
  },
  {
    color: "#d558c9",
    name: "Ulick Jewell",
    avatar:
      "https://robohash.org/minimamollitiaconsequatur.png?size=50x50&set=set1",
    university: "Universidade Estadual de Londrina",
    sentences:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "ujewell7b@clickbank.net",
  },
  {
    color: "#5ba8e8",
    name: "Quintina McClymond",
    avatar: "https://robohash.org/doloreiuseveniet.png?size=50x50&set=set1",
    university: "Baha'i Institute for Higher Education",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "qmcclymond7c@prnewswire.com",
  },
  {
    color: "#b590f0",
    name: "Gilburt Dalgarnowch",
    avatar: "https://robohash.org/utexcepturidolores.png?size=50x50&set=set1",
    university: "Modern University for the Humanities",
    sentences:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    email: "gdalgarnowch7d@unc.edu",
  },
  {
    color: "#2c39e1",
    name: "Codie Yonnie",
    avatar:
      "https://robohash.org/necessitatibusdolorumconsectetur.png?size=50x50&set=set1",
    university: "Hebei Normal University",
    sentences:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    email: "cyonnie7e@zimbio.com",
  },
  {
    color: "#791f20",
    name: "Madelena Snoddin",
    avatar:
      "https://robohash.org/repellatarchitectoneque.png?size=50x50&set=set1",
    university: "Chongqing Education College",
    sentences:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    email: "msnoddin7f@51.la",
  },
  {
    color: "#da4c69",
    name: "Talia Fardo",
    avatar: "https://robohash.org/quiautdistinctio.png?size=50x50&set=set1",
    university: "University of International Business",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    email: "tfardo7g@ed.gov",
  },
  {
    color: "#5c755e",
    name: "Domenic Astling",
    avatar: "https://robohash.org/errornihilquae.png?size=50x50&set=set1",
    university: "Conestoga College",
    sentences: "Nullam molestie nibh in lectus. Pellentesque at nulla.",
    email: "dastling7h@unesco.org",
  },
  {
    color: "#4a26c4",
    name: "Teresita Bowlas",
    avatar: "https://robohash.org/iureidenim.png?size=50x50&set=set1",
    university: "Universidad Católica Cardenal Raúl Silva Henríquez",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "tbowlas7i@hud.gov",
  },
  {
    color: "#20b356",
    name: "Filberte Serot",
    avatar:
      "https://robohash.org/porrodelectuspraesentium.png?size=50x50&set=set1",
    university: "Kaunas Medical Academy",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    email: "fserot7j@mit.edu",
  },
  {
    color: "#42d351",
    name: "Daniella Grogan",
    avatar:
      "https://robohash.org/consequaturexpeditarecusandae.png?size=50x50&set=set1",
    university: "Fundación Universitaria Luis Amigó",
    sentences: "Nulla suscipit ligula in lacus.",
    email: "dgrogan7k@usa.gov",
  },
  {
    color: "#e98b25",
    name: "Dinah Ivetts",
    avatar: "https://robohash.org/adeummollitia.png?size=50x50&set=set1",
    university: "Universidad de Norteamerica",
    sentences: "Aliquam sit amet diam in magna bibendum imperdiet.",
    email: "divetts7l@networkadvertising.org",
  },
  {
    color: "#a575fd",
    name: "Shoshana Bentick",
    avatar: "https://robohash.org/temporeipsumillum.png?size=50x50&set=set1",
    university: "Birzeit University",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    email: "sbentick7m@go.com",
  },
  {
    color: "#f223b5",
    name: "Gilli Kinkade",
    avatar: "https://robohash.org/eligendieaquequasi.png?size=50x50&set=set1",
    university: "Ecole Nationale Supérieure de Chimie de Toulouse",
    sentences:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    email: "gkinkade7n@vkontakte.ru",
  },
  {
    color: "#d097fe",
    name: "Arvin Cubin",
    avatar:
      "https://robohash.org/mollitiadolorsimilique.png?size=50x50&set=set1",
    university: "Universidad del Norte",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
    email: "acubin7o@unicef.org",
  },
  {
    color: "#79541d",
    name: "Mitch Hawksby",
    avatar: "https://robohash.org/sedrerumcorrupti.png?size=50x50&set=set1",
    university: "University of the Italian-speaking Part of Switzerland",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    email: "mhawksby7p@xrea.com",
  },
  {
    color: "#24f706",
    name: "Brand Redmond",
    avatar:
      "https://robohash.org/dignissimosautemtemporibus.png?size=50x50&set=set1",
    university: "Vitebsk State Academy of Veterinary Medicine",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    email: "bredmond7q@instagram.com",
  },
  {
    color: "#6bd21d",
    name: "Davine Hardcastle",
    avatar: "https://robohash.org/aliquiddelenitiquo.png?size=50x50&set=set1",
    university: "School of Business and Finance",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "dhardcastle7r@shareasale.com",
  },
  {
    color: "#a2844a",
    name: "Trace Camilleri",
    avatar: "https://robohash.org/beataeetsaepe.png?size=50x50&set=set1",
    university: "Darul Quran Islamic College University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    email: "tcamilleri7s@hao123.com",
  },
  {
    color: "#fe4c13",
    name: "Darcy Bichard",
    avatar:
      "https://robohash.org/eiusvoluptatemoccaecati.png?size=50x50&set=set1",
    university: "Katholieke Universiteit Leuven",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    email: "dbichard7t@admin.ch",
  },
  {
    color: "#c98209",
    name: "Stephenie Ludmann",
    avatar: "https://robohash.org/quaepariaturdolorum.png?size=50x50&set=set1",
    university: "Skidmore College",
    sentences: "Nulla facilisi.",
    email: "sludmann7u@washingtonpost.com",
  },
  {
    color: "#5e7d6e",
    name: "Page Krug",
    avatar: "https://robohash.org/utvelitcupiditate.png?size=50x50&set=set1",
    university: "Soongsil University",
    sentences:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
    email: "pkrug7v@tripod.com",
  },
  {
    color: "#904000",
    name: "Charmaine Jedrasik",
    avatar: "https://robohash.org/etestrepudiandae.png?size=50x50&set=set1",
    university: "Williams College",
    sentences:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    email: "cjedrasik7w@jimdo.com",
  },
  {
    color: "#c1ea51",
    name: "Hill Edsell",
    avatar: "https://robohash.org/voluptasautquasi.png?size=50x50&set=set1",
    university: "Teachers College, Columbia University",
    sentences: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "hedsell7x@alibaba.com",
  },
  {
    color: "#738ba7",
    name: "Glendon Wiggans",
    avatar:
      "https://robohash.org/maioresconsequunturdignissimos.png?size=50x50&set=set1",
    university: "Jamia Hamdard University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    email: "gwiggans7y@lulu.com",
  },
  {
    color: "#b0ae3d",
    name: "Aurie McVey",
    avatar: "https://robohash.org/veldictasapiente.png?size=50x50&set=set1",
    university: "Clemson University",
    sentences:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "amcvey7z@wikispaces.com",
  },
  {
    color: "#53e60a",
    name: "Evered Spellward",
    avatar: "https://robohash.org/idsedhic.png?size=50x50&set=set1",
    university: "Uttarakhand Open University ",
    sentences:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "espellward80@delicious.com",
  },
  {
    color: "#a090d7",
    name: "Terrel McGahy",
    avatar: "https://robohash.org/liberoquosmagnam.png?size=50x50&set=set1",
    university: "Escola Superior de Hotelaria e Turismo do Estoril",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    email: "tmcgahy81@baidu.com",
  },
  {
    color: "#515b52",
    name: "Audrey Yellowlees",
    avatar: "https://robohash.org/incorruptiqui.png?size=50x50&set=set1",
    university: "Centro de Estudios Avanzados de Puerto Rico y el Caribe",
    sentences:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    email: "ayellowlees82@youku.com",
  },
  {
    color: "#3f07f0",
    name: "Brandy Blackborne",
    avatar:
      "https://robohash.org/abdeleniticonsequatur.png?size=50x50&set=set1",
    university:
      "State University of New York College of Environmental Science and Forestry",
    sentences: "In congue.",
    email: "bblackborne83@tumblr.com",
  },
  {
    color: "#654422",
    name: "Addie Real",
    avatar: "https://robohash.org/rerumdoloremnatus.png?size=50x50&set=set1",
    university: "National University of Science and Technology",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "areal84@prnewswire.com",
  },
  {
    color: "#2e7c67",
    name: "Nariko Burgin",
    avatar: "https://robohash.org/quivelplaceat.png?size=50x50&set=set1",
    university: "Cankaya University",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    email: "nburgin85@addtoany.com",
  },
  {
    color: "#e1ab0c",
    name: "Nelli Bumby",
    avatar: "https://robohash.org/autiustodolorum.png?size=50x50&set=set1",
    university: "National College for Medical and Technical Studies",
    sentences: "Morbi vel lectus in quam fringilla rhoncus.",
    email: "nbumby86@bravesites.com",
  },
  {
    color: "#1c3134",
    name: "Zahara Ferrige",
    avatar: "https://robohash.org/assumendaetsed.png?size=50x50&set=set1",
    university: "Rasmussen College, North Dakota Campuses",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
    email: "zferrige87@sun.com",
  },
  {
    color: "#a113bb",
    name: "Kippie Avent",
    avatar:
      "https://robohash.org/suscipitreprehenderitpariatur.png?size=50x50&set=set1",
    university: "Universidad Monsenor Oscar Arnulfo Romeo",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "kavent88@blogger.com",
  },
  {
    color: "#6c4fd6",
    name: "Kimbell Nisbet",
    avatar:
      "https://robohash.org/quiexpeditalaboriosam.png?size=50x50&set=set1",
    university: "Tokai Gakuen University",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    email: "knisbet89@domainmarket.com",
  },
  {
    color: "#40ccc6",
    name: "Marietta Austins",
    avatar: "https://robohash.org/quiremqui.png?size=50x50&set=set1",
    university: "Catholic University of Eastern Africa",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "maustins8a@indiegogo.com",
  },
  {
    color: "#17d35b",
    name: "Marsh Gadault",
    avatar: "https://robohash.org/estanimiet.png?size=50x50&set=set1",
    university: "University of Salford",
    sentences: "Nunc rhoncus dui vel sem.",
    email: "mgadault8b@pagesperso-orange.fr",
  },
  {
    color: "#b3ecf9",
    name: "Karly Treweek",
    avatar:
      "https://robohash.org/aliquidtemporeaperiam.png?size=50x50&set=set1",
    university: "Simpson College Iowa",
    sentences:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    email: "ktreweek8c@guardian.co.uk",
  },
  {
    color: "#b68305",
    name: "Dulcinea Bacop",
    avatar: "https://robohash.org/nobispossimusquo.png?size=50x50&set=set1",
    university: "Taizhou College",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "dbacop8d@stanford.edu",
  },
  {
    color: "#0acaec",
    name: "Gibb Brannon",
    avatar:
      "https://robohash.org/blanditiisverovoluptas.png?size=50x50&set=set1",
    university: "Pusan University of Foreign Studies",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    email: "gbrannon8e@merriam-webster.com",
  },
  {
    color: "#a3ac30",
    name: "Trude Visco",
    avatar:
      "https://robohash.org/maioresvoluptatemreprehenderit.png?size=50x50&set=set1",
    university: "The Defiance College",
    sentences:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    email: "tvisco8f@ameblo.jp",
  },
  {
    color: "#05ecaa",
    name: "Jocelyne Gristock",
    avatar: "https://robohash.org/consecteturevenietet.png?size=50x50&set=set1",
    university: "Randolph-Macon Woman's College",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    email: "jgristock8g@usatoday.com",
  },
  {
    color: "#41f694",
    name: "Fredelia Rihanek",
    avatar: "https://robohash.org/rerumindignissimos.png?size=50x50&set=set1",
    university: "National Taitung Teachers College",
    sentences: "Phasellus sit amet erat. Nulla tempus.",
    email: "frihanek8h@youku.com",
  },
  {
    color: "#102410",
    name: "Jocelin Woolis",
    avatar:
      "https://robohash.org/doloremdebitisdolorum.png?size=50x50&set=set1",
    university: "Columbia College",
    sentences:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    email: "jwoolis8i@scientificamerican.com",
  },
  {
    color: "#d784b3",
    name: "Bogart Pau",
    avatar: "https://robohash.org/suntnihilquidem.png?size=50x50&set=set1",
    university: "University of Portland",
    sentences: "In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    email: "bpau8j@hatena.ne.jp",
  },
  {
    color: "#c639f1",
    name: "Michale Gofton",
    avatar: "https://robohash.org/estvelitet.png?size=50x50&set=set1",
    university: "Chinese University of Hong Kong",
    sentences:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    email: "mgofton8k@mysql.com",
  },
  {
    color: "#b7a3e8",
    name: "Gena Gaskarth",
    avatar: "https://robohash.org/undeenimpossimus.png?size=50x50&set=set1",
    university: "Southwestern College Santa Fe",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    email: "ggaskarth8l@bluehost.com",
  },
  {
    color: "#0ce7c4",
    name: "Scot Kislingbury",
    avatar:
      "https://robohash.org/placeatoditconsequatur.png?size=50x50&set=set1",
    university: "Private College of Dentistry and Pharmacy",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    email: "skislingbury8m@economist.com",
  },
  {
    color: "#35761b",
    name: "Carrie Elleray",
    avatar: "https://robohash.org/ipsumabofficiis.png?size=50x50&set=set1",
    university: "Samara State Medical University",
    sentences: "Proin at turpis a pede posuere nonummy. Integer non velit.",
    email: "celleray8n@umn.edu",
  },
  {
    color: "#9ed9ef",
    name: "Teresita Novik",
    avatar: "https://robohash.org/assumendanihilut.png?size=50x50&set=set1",
    university: "Changchun Teachers College",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    email: "tnovik8o@cyberchimps.com",
  },
  {
    color: "#94ed59",
    name: "Norene Kuschel",
    avatar: "https://robohash.org/sitsednumquam.png?size=50x50&set=set1",
    university: "Libyan International Medical University (LIMU)",
    sentences:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "nkuschel8p@hatena.ne.jp",
  },
  {
    color: "#805e64",
    name: "Ryon Bradberry",
    avatar: "https://robohash.org/aspernaturutcorrupti.png?size=50x50&set=set1",
    university: "Lutheran Bible Institute of Seattle",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    email: "rbradberry8q@google.co.jp",
  },
  {
    color: "#38ca82",
    name: "Reeta Richard",
    avatar: "https://robohash.org/corporiscumquesed.png?size=50x50&set=set1",
    university: "Universidad Iberoamericana",
    sentences: "Duis at velit eu est congue elementum.",
    email: "rrichard8r@reuters.com",
  },
  {
    color: "#7c8e90",
    name: "Lea Stoven",
    avatar:
      "https://robohash.org/occaecativoluptatemrecusandae.png?size=50x50&set=set1",
    university: "Azerbaijan State Oil Academy",
    sentences:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    email: "lstoven8s@ibm.com",
  },
  {
    color: "#bdd029",
    name: "Josias Wixon",
    avatar:
      "https://robohash.org/veniammolestiasdolorem.png?size=50x50&set=set1",
    university: "Omsk State Agrarian University",
    sentences: "Nulla nisl. Nunc nisl.",
    email: "jwixon8t@themeforest.net",
  },
  {
    color: "#6cfa58",
    name: "Colas Aldersey",
    avatar: "https://robohash.org/undeplaceattempore.png?size=50x50&set=set1",
    university: "University of Italian Studies for Foreigners of Siena",
    sentences:
      "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    email: "caldersey8u@de.vu",
  },
  {
    color: "#e7d817",
    name: "Natale Cisar",
    avatar: "https://robohash.org/utmolestiasea.png?size=50x50&set=set1",
    university: "DeVry Institute of Technology, Chicago",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    email: "ncisar8v@cbslocal.com",
  },
  {
    color: "#239556",
    name: "Callie Bjorkan",
    avatar: "https://robohash.org/repudiandaeomniset.png?size=50x50&set=set1",
    university: "Universidad de Sevilla",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "cbjorkan8w@aol.com",
  },
  {
    color: "#7992d8",
    name: "Pepi Hellicar",
    avatar:
      "https://robohash.org/voluptatemmagnamaspernatur.png?size=50x50&set=set1",
    university: "Sacred Heart University",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    email: "phellicar8x@fema.gov",
  },
  {
    color: "#ba8b3f",
    name: "Starr Dawkins",
    avatar: "https://robohash.org/quisitullam.png?size=50x50&set=set1",
    university: "Karolinska Institute Stockholm",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    email: "sdawkins8y@cam.ac.uk",
  },
  {
    color: "#57ffe3",
    name: "Padgett Siemons",
    avatar: "https://robohash.org/autquoslabore.png?size=50x50&set=set1",
    university: "Universitas Sarjanawiyata Tamansiswa",
    sentences:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    email: "psiemons8z@huffingtonpost.com",
  },
  {
    color: "#6b396a",
    name: "Izak Antrim",
    avatar: "https://robohash.org/velestquia.png?size=50x50&set=set1",
    university: "American University",
    sentences: "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    email: "iantrim90@rediff.com",
  },
  {
    color: "#f144d4",
    name: "Hi Mioni",
    avatar: "https://robohash.org/dolorepossimusest.png?size=50x50&set=set1",
    university: "University of Memphis",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    email: "hmioni91@apache.org",
  },
  {
    color: "#28b6cf",
    name: "Lauren Curd",
    avatar: "https://robohash.org/evenietvoluptaseos.png?size=50x50&set=set1",
    university: "Institute of Teachers Education, Batu Lintang",
    sentences:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    email: "lcurd92@bizjournals.com",
  },
  {
    color: "#e070d8",
    name: "Lorenzo Biggin",
    avatar: "https://robohash.org/nisifacilismodi.png?size=50x50&set=set1",
    university: "Victoria University Toronto, University of Toronto",
    sentences:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "lbiggin93@jiathis.com",
  },
  {
    color: "#961614",
    name: "Warner Comini",
    avatar: "https://robohash.org/cumqueerrordeleniti.png?size=50x50&set=set1",
    university: "Rasmussen College, Florida Campuses",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    email: "wcomini94@reference.com",
  },
  {
    color: "#ade525",
    name: "Aurie Loweth",
    avatar:
      "https://robohash.org/recusandaealiquidnihil.png?size=50x50&set=set1",
    university: "Faculté Universitaire des Sciences Agronomiques de Gembloux",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    email: "aloweth95@about.com",
  },
  {
    color: "#f21737",
    name: "Beitris Acom",
    avatar: "https://robohash.org/voluptatibusutsit.png?size=50x50&set=set1",
    university: "International Theravada Buddhist Missionary University",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "bacom96@1und1.de",
  },
  {
    color: "#a9906c",
    name: "Mortie Sandry",
    avatar: "https://robohash.org/accusamusipsumqui.png?size=50x50&set=set1",
    university: "Donetsk National University",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    email: "msandry97@geocities.jp",
  },
  {
    color: "#dcecbf",
    name: "Cobbie Wonfor",
    avatar: "https://robohash.org/rerumquodolorum.png?size=50x50&set=set1",
    university: "University of Birmingham",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    email: "cwonfor98@mapquest.com",
  },
  {
    color: "#65db24",
    name: "Garold Ferencowicz",
    avatar: "https://robohash.org/nonquieos.png?size=50x50&set=set1",
    university: "American InterContinental University - Atlanta",
    sentences:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "gferencowicz99@pcworld.com",
  },
  {
    color: "#8c564b",
    name: "Yanaton Wassell",
    avatar:
      "https://robohash.org/ducimusreprehenderitfugit.png?size=50x50&set=set1",
    university: "Mount Kenya University",
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    email: "ywassell9a@oaic.gov.au",
  },
  {
    color: "#6b93c8",
    name: "Christan Lots",
    avatar: "https://robohash.org/officiaesseomnis.png?size=50x50&set=set1",
    university: "Cosmopolitan University",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    email: "clots9b@state.gov",
  },
  {
    color: "#7db2e0",
    name: "Carma McAirt",
    avatar: "https://robohash.org/doloreafuga.png?size=50x50&set=set1",
    university: "Université de Bamenda",
    sentences: "Integer ac neque.",
    email: "cmcairt9c@economist.com",
  },
  {
    color: "#8d41c1",
    name: "Dave Ousbie",
    avatar:
      "https://robohash.org/repudiandaecupiditatenostrum.png?size=50x50&set=set1",
    university: "University of Agriculture and Veterinary Medicine Cluj-Napoca",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    email: "dousbie9d@macromedia.com",
  },
  {
    color: "#d7e97a",
    name: "Tyson Mellhuish",
    avatar: "https://robohash.org/nequevoluptatesquia.png?size=50x50&set=set1",
    university: "Instituto Superior de Informática e Gestão",
    sentences: "Aenean fermentum.",
    email: "tmellhuish9e@xrea.com",
  },
  {
    color: "#ebcd5e",
    name: "Kenyon Readwood",
    avatar: "https://robohash.org/autdistinctiotempore.png?size=50x50&set=set1",
    university: "National University of Laos",
    sentences: "Nunc rhoncus dui vel sem.",
    email: "kreadwood9f@telegraph.co.uk",
  },
  {
    color: "#95da24",
    name: "Putnem Jacox",
    avatar: "https://robohash.org/optiodolorumcommodi.png?size=50x50&set=set1",
    university: "Vilnius Gediminas Technical University",
    sentences:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    email: "pjacox9g@bravesites.com",
  },
  {
    color: "#4b7266",
    name: "Reider Simnel",
    avatar: "https://robohash.org/nisieteaque.png?size=50x50&set=set1",
    university: "Moraine Valley Community College",
    sentences:
      "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    email: "rsimnel9h@unc.edu",
  },
  {
    color: "#a82046",
    name: "Magdalena Bussetti",
    avatar: "https://robohash.org/eligendivelqui.png?size=50x50&set=set1",
    university: "Rakuno Gakuen University",
    sentences:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    email: "mbussetti9i@123-reg.co.uk",
  },
  {
    color: "#ee5822",
    name: "Lindy Fensome",
    avatar: "https://robohash.org/aperiamquiest.png?size=50x50&set=set1",
    university: "Franciscan University of Steubenville",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
    email: "lfensome9j@goo.ne.jp",
  },
  {
    color: "#809777",
    name: "Honor Seefeldt",
    avatar:
      "https://robohash.org/quiadelectuslaboriosam.png?size=50x50&set=set1",
    university: "Bangkok University",
    sentences:
      "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    email: "hseefeldt9k@ow.ly",
  },
  {
    color: "#27f709",
    name: "Hilliard Bilston",
    avatar:
      "https://robohash.org/cupiditateetdistinctio.png?size=50x50&set=set1",
    university: "Technical University of Iasi",
    sentences:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "hbilston9l@vimeo.com",
  },
  {
    color: "#296eff",
    name: "Sylas Stamp",
    avatar: "https://robohash.org/utmolestiaenobis.png?size=50x50&set=set1",
    university: "Chonbuk Sanup University of Technology (Howon University)",
    sentences:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    email: "sstamp9m@house.gov",
  },
  {
    color: "#29fd4c",
    name: "Jillene Rearie",
    avatar: "https://robohash.org/quierrorveniam.png?size=50x50&set=set1",
    university: "Kolej Universiti Insaniah",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    email: "jrearie9n@seattletimes.com",
  },
  {
    color: "#34b3c1",
    name: "Berkeley Woodage",
    avatar: "https://robohash.org/aperiamsapienteea.png?size=50x50&set=set1",
    university: "Kenya Medical Training College",
    sentences: "Nulla suscipit ligula in lacus.",
    email: "bwoodage9o@uol.com.br",
  },
  {
    color: "#ecda93",
    name: "Elysia Crasford",
    avatar:
      "https://robohash.org/accusantiumvoluptassint.png?size=50x50&set=set1",
    university: "COMSATS Institute of Information Technology",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    email: "ecrasford9p@earthlink.net",
  },
  {
    color: "#15488c",
    name: "Deb Hammerberg",
    avatar: "https://robohash.org/quivelitnesciunt.png?size=50x50&set=set1",
    university: "Chang Gung University",
    sentences:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    email: "dhammerberg9q@joomla.org",
  },
  {
    color: "#e2984a",
    name: "Ashlen Silverson",
    avatar: "https://robohash.org/consequaturdictased.png?size=50x50&set=set1",
    university: "Southwestern University School of Law",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    email: "asilverson9r@behance.net",
  },
  {
    color: "#387f61",
    name: "Marlo Lownie",
    avatar: "https://robohash.org/quialiquameligendi.png?size=50x50&set=set1",
    university: "Kazan State Finance and Economics Institute ",
    sentences:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    email: "mlownie9s@nydailynews.com",
  },
  {
    color: "#fc79bc",
    name: "Sawyere Buntine",
    avatar: "https://robohash.org/omnisestvoluptatibus.png?size=50x50&set=set1",
    university: "Universidad Rural de Guatemala",
    sentences:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    email: "sbuntine9t@wikimedia.org",
  },
  {
    color: "#3910f2",
    name: "Danella Fletcher",
    avatar: "https://robohash.org/quiainnon.png?size=50x50&set=set1",
    university: "Instituto Superior Politécnico José Antonio Echeverría",
    sentences:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    email: "dfletcher9u@dagondesign.com",
  },
  {
    color: "#55020f",
    name: "Desirae Seaman",
    avatar: "https://robohash.org/nonetest.png?size=50x50&set=set1",
    university: "Oita University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    email: "dseaman9v@about.me",
  },
  {
    color: "#fc0ca4",
    name: "Nydia Wilfing",
    avatar: "https://robohash.org/natusautemdolorem.png?size=50x50&set=set1",
    university: "Kobe University of Mercantile Marine",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    email: "nwilfing9w@histats.com",
  },
  {
    color: "#084d27",
    name: "Heriberto Parkyns",
    avatar: "https://robohash.org/autemoptiout.png?size=50x50&set=set1",
    university: "Omsk State Technical University",
    sentences: "Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "hparkyns9x@google.co.jp",
  },
  {
    color: "#4384f2",
    name: "Stacie Albury",
    avatar:
      "https://robohash.org/asperioresculpaincidunt.png?size=50x50&set=set1",
    university: "Institute of Management Sciences, Peshawar",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    email: "salbury9y@1und1.de",
  },
  {
    color: "#ac2f91",
    name: "Freida Maffulli",
    avatar: "https://robohash.org/expeditanequemagni.png?size=50x50&set=set1",
    university: "Auburn University",
    sentences: "Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "fmaffulli9z@china.com.cn",
  },
  {
    color: "#1479e1",
    name: "Ferd Adolfson",
    avatar:
      "https://robohash.org/praesentiumducimusatque.png?size=50x50&set=set1",
    university: "School of Finance and Banking",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    email: "fadolfsona0@blinklist.com",
  },
  {
    color: "#139e2c",
    name: "Saunderson Towersey",
    avatar: "https://robohash.org/fugitquocommodi.png?size=50x50&set=set1",
    university: "University of New Hampshire",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    email: "stowerseya1@bandcamp.com",
  },
  {
    color: "#3fe432",
    name: "Robert Firebrace",
    avatar: "https://robohash.org/magnammaioresomnis.png?size=50x50&set=set1",
    university: "Bryant and Stratton College",
    sentences:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    email: "rfirebracea2@over-blog.com",
  },
  {
    color: "#1f7b87",
    name: "Wini Winckles",
    avatar:
      "https://robohash.org/blanditiisdelectuseveniet.png?size=50x50&set=set1",
    university: "Norway's Information Technology University College",
    sentences:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    email: "wwincklesa3@chronoengine.com",
  },
  {
    color: "#e701ca",
    name: "Anabella O'Geneay",
    avatar: "https://robohash.org/quasiidsimilique.png?size=50x50&set=set1",
    university: "IntelliTec College - Grand Junction",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    email: "aogeneaya4@networkadvertising.org",
  },
  {
    color: "#7b6352",
    name: "Petra Evemy",
    avatar: "https://robohash.org/quasisitharum.png?size=50x50&set=set1",
    university: "Textile Institute of Pakistan",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    email: "pevemya5@amazon.co.jp",
  },
  {
    color: "#dbec7b",
    name: "Hubie Capinetti",
    avatar: "https://robohash.org/nobissuntsaepe.png?size=50x50&set=set1",
    university: "Aristotle University of Thessaloniki",
    sentences:
      "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    email: "hcapinettia6@weebly.com",
  },
  {
    color: "#431b79",
    name: "Brandyn McEnteggart",
    avatar:
      "https://robohash.org/inciduntsaepeveritatis.png?size=50x50&set=set1",
    university: "Universidad de Atacama",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    email: "bmcenteggarta7@blogspot.com",
  },
  {
    color: "#d32b9b",
    name: "Anna-maria Pymm",
    avatar:
      "https://robohash.org/eligendicommodirepellat.png?size=50x50&set=set1",
    university: "İstanbul Şehir University",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    email: "apymma8@unicef.org",
  },
  {
    color: "#cabcf5",
    name: "Dunn Doleman",
    avatar: "https://robohash.org/sintquosaliquam.png?size=50x50&set=set1",
    university: "Arts, Sciences and Technology University",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    email: "ddolemana9@youku.com",
  },
  {
    color: "#cdac5d",
    name: "Henryetta Bedle",
    avatar: "https://robohash.org/utetcupiditate.png?size=50x50&set=set1",
    university: "Novena University",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    email: "hbedleaa@foxnews.com",
  },
  {
    color: "#d7b7dd",
    name: "Cyndie Signori",
    avatar: "https://robohash.org/sedrerumharum.png?size=50x50&set=set1",
    university: "National Law School of India University",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    email: "csignoriab@purevolume.com",
  },
  {
    color: "#930974",
    name: "Analise Mc Caghan",
    avatar: "https://robohash.org/ameteaest.png?size=50x50&set=set1",
    university: "Hamline University",
    sentences:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "amcac@chronoengine.com",
  },
  {
    color: "#680769",
    name: "Clywd Hiscoe",
    avatar: "https://robohash.org/exomnisqui.png?size=50x50&set=set1",
    university: "Goldsmiths College, University of London",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    email: "chiscoead@twitter.com",
  },
  {
    color: "#bd243b",
    name: "Garland Beevor",
    avatar:
      "https://robohash.org/repellatdelectuslibero.png?size=50x50&set=set1",
    university: "Texas A&M University - Galveston",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    email: "gbeevorae@drupal.org",
  },
  {
    color: "#e63c08",
    name: "Andros Matiashvili",
    avatar: "https://robohash.org/aliaseosdolorem.png?size=50x50&set=set1",
    university: "Ecole Normale Supérieure de Fontenay-Saint Cloud",
    sentences:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "amatiashviliaf@va.gov",
  },
  {
    color: "#c280c4",
    name: "Paulita Dellit",
    avatar:
      "https://robohash.org/oditperferendisducimus.png?size=50x50&set=set1",
    university: "Arab Open University, Kuwait Branch",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "pdellitag@tripadvisor.com",
  },
  {
    color: "#16a8fa",
    name: "Weber Lawty",
    avatar: "https://robohash.org/delenitiveritatiset.png?size=50x50&set=set1",
    university: "Cevro Institut College",
    sentences:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
    email: "wlawtyah@jalbum.net",
  },
  {
    color: "#29e569",
    name: "Harold Winterton",
    avatar: "https://robohash.org/voluptassitmaiores.png?size=50x50&set=set1",
    university: "Luzhou Medical College",
    sentences: "Nulla ut erat id mauris vulputate elementum.",
    email: "hwintertonai@imgur.com",
  },
  {
    color: "#a97a66",
    name: "Forester Daspar",
    avatar: "https://robohash.org/insintsed.png?size=50x50&set=set1",
    university: "Urmia University of Medical Sciences",
    sentences:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "fdasparaj@bloglines.com",
  },
  {
    color: "#16f57c",
    name: "Lilian Satterly",
    avatar:
      "https://robohash.org/corporisdignissimosvoluptas.png?size=50x50&set=set1",
    university: "College of the Ozarks",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "lsatterlyak@dagondesign.com",
  },
  {
    color: "#df7e6e",
    name: "Gilbertine Dyas",
    avatar:
      "https://robohash.org/adipiscieligendidolores.png?size=50x50&set=set1",
    university: "Université Paris Nanterre (Paris X)",
    sentences: "Pellentesque ultrices mattis odio.",
    email: "gdyasal@dropbox.com",
  },
  {
    color: "#351480",
    name: "Mildrid Mitchall",
    avatar:
      "https://robohash.org/suscipitvoluptatemenim.png?size=50x50&set=set1",
    university: "Tilka Manjhi Bhagalpur University",
    sentences:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    email: "mmitchallam@wunderground.com",
  },
  {
    color: "#856f61",
    name: "Isabelle Tokley",
    avatar:
      "https://robohash.org/perferendisdoloremrerum.png?size=50x50&set=set1",
    university: "Fushun Petroleum University",
    sentences:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    email: "itokleyan@arstechnica.com",
  },
  {
    color: "#aa4479",
    name: "Alford Rothermel",
    avatar:
      "https://robohash.org/quidemrepudiandaeexcepturi.png?size=50x50&set=set1",
    university: "Université de Lubumbashi",
    sentences: "Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    email: "arothermelao@reference.com",
  },
  {
    color: "#a372c6",
    name: "Karly Eustice",
    avatar: "https://robohash.org/excepturivitaeet.png?size=50x50&set=set1",
    university: "Georgetown University",
    sentences:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    email: "keusticeap@creativecommons.org",
  },
  {
    color: "#47c8a8",
    name: "Collette Coskerry",
    avatar: "https://robohash.org/etautsed.png?size=50x50&set=set1",
    university: "Instituto Nacional de Matemática Pura e Aplicada - IMPA",
    sentences:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "ccoskerryaq@blogspot.com",
  },
  {
    color: "#dc660f",
    name: "Fonsie Liepina",
    avatar: "https://robohash.org/possimusdictaaut.png?size=50x50&set=set1",
    university: "Brevard College",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    email: "fliepinaar@amazon.com",
  },
  {
    color: "#53feae",
    name: "Amber Artingstall",
    avatar: "https://robohash.org/doloremenimnisi.png?size=50x50&set=set1",
    university: "Karunya Institute Of Technology ( Deemed University)",
    sentences:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    email: "aartingstallas@adobe.com",
  },
  {
    color: "#4438ee",
    name: "Kingsly Belle",
    avatar: "https://robohash.org/aperiamnonbeatae.png?size=50x50&set=set1",
    university: "FON University",
    sentences:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "kbelleat@friendfeed.com",
  },
  {
    color: "#fa8573",
    name: "Paquito Pordall",
    avatar:
      "https://robohash.org/architectonesciuntiste.png?size=50x50&set=set1",
    university: "Seoul Women's University",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "ppordallau@oakley.com",
  },
  {
    color: "#811319",
    name: "Carena Scholtis",
    avatar: "https://robohash.org/inciduntetunde.png?size=50x50&set=set1",
    university: "University of Central Florida",
    sentences: "Nulla tellus. In sagittis dui vel nisl.",
    email: "cscholtisav@unc.edu",
  },
  {
    color: "#37b24b",
    name: "Marianna Jaggers",
    avatar:
      "https://robohash.org/solutaquibusdamofficiis.png?size=50x50&set=set1",
    university: "School of Business and Finance",
    sentences:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "mjaggersaw@wikia.com",
  },
  {
    color: "#bea8f3",
    name: "Karisa MacGow",
    avatar: "https://robohash.org/praesentiumautaut.png?size=50x50&set=set1",
    university: "North Bengal University",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    email: "kmacgowax@huffingtonpost.com",
  },
  {
    color: "#923335",
    name: "Aubrey Mattinson",
    avatar: "https://robohash.org/solutacorruptiomnis.png?size=50x50&set=set1",
    university: "School of Education Pisa",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    email: "amattinsonay@amazon.de",
  },
  {
    color: "#aa1790",
    name: "Claudetta Auchterlonie",
    avatar:
      "https://robohash.org/voluptatemdoloremrerum.png?size=50x50&set=set1",
    university: "University of Kragujevac",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "cauchterlonieaz@ucoz.com",
  },
  {
    color: "#78b995",
    name: "Carroll Kaveney",
    avatar: "https://robohash.org/istenonet.png?size=50x50&set=set1",
    university: "Universidad Autónoma de Nuevo León",
    sentences:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    email: "ckaveneyb0@shareasale.com",
  },
  {
    color: "#618c4a",
    name: "Raddy Schruyer",
    avatar: "https://robohash.org/modianimiaut.png?size=50x50&set=set1",
    university: "University of Charleston",
    sentences:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    email: "rschruyerb1@cmu.edu",
  },
  {
    color: "#9ad123",
    name: "Virgie Olivetti",
    avatar: "https://robohash.org/ettemporeipsam.png?size=50x50&set=set1",
    university: "Beijing Institute of Technology",
    sentences:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "volivettib2@kickstarter.com",
  },
  {
    color: "#7e426a",
    name: "Sigismundo Worshall",
    avatar: "https://robohash.org/eosfugitdoloremque.png?size=50x50&set=set1",
    university: "Lourdes College",
    sentences:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "sworshallb3@who.int",
  },
  {
    color: "#bf2841",
    name: "Jacob De Malchar",
    avatar:
      "https://robohash.org/essereprehenderitnihil.png?size=50x50&set=set1",
    university: "Kenya Methodist University",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    email: "jdeb4@dedecms.com",
  },
  {
    color: "#0614d2",
    name: "Wylie Dullingham",
    avatar: "https://robohash.org/errordeseruntqui.png?size=50x50&set=set1",
    university: "University of Science and Technology of China",
    sentences:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "wdullinghamb5@msu.edu",
  },
  {
    color: "#d6005e",
    name: "Delilah Jocic",
    avatar:
      "https://robohash.org/fugiatnostrumrepellendus.png?size=50x50&set=set1",
    university: "Wesley College",
    sentences: "Duis at velit eu est congue elementum.",
    email: "djocicb6@pinterest.com",
  },
  {
    color: "#593a93",
    name: "Wang Linacre",
    avatar: "https://robohash.org/culpasaepeodio.png?size=50x50&set=set1",
    university: "Institute of Teachers Education, Rajang",
    sentences:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    email: "wlinacreb7@nature.com",
  },
  {
    color: "#aefcc9",
    name: "Ingmar Sacase",
    avatar: "https://robohash.org/velitetpariatur.png?size=50x50&set=set1",
    university: "Tokyo Medical and Dental University",
    sentences:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
    email: "isacaseb8@networkadvertising.org",
  },
  {
    color: "#ee8406",
    name: "Wilow Ondricek",
    avatar: "https://robohash.org/quidemvelitquia.png?size=50x50&set=set1",
    university: "Institute of Advanced Legal Studies, University of London",
    sentences: "Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    email: "wondricekb9@google.ru",
  },
  {
    color: "#ec9449",
    name: "Twyla Hallows",
    avatar: "https://robohash.org/quisquamfugiatest.png?size=50x50&set=set1",
    university: "University of Durham",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "thallowsba@huffingtonpost.com",
  },
  {
    color: "#ef0ad9",
    name: "Corliss Lefley",
    avatar: "https://robohash.org/facilisistevelit.png?size=50x50&set=set1",
    university: "Saitama Prefectural University",
    sentences:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    email: "clefleybb@wisc.edu",
  },
  {
    color: "#df7f5c",
    name: "Otho Goolden",
    avatar: "https://robohash.org/maioresdelectuscum.png?size=50x50&set=set1",
    university: "Fachhochschule für Verwaltung und Rechtspflege Berlin",
    sentences:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    email: "ogooldenbc@w3.org",
  },
  {
    color: "#ce0dab",
    name: "Haroun Cisson",
    avatar: "https://robohash.org/voluptasenimsed.png?size=50x50&set=set1",
    university: "University of Sopron",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "hcissonbd@newsvine.com",
  },
  {
    color: "#b057c6",
    name: "Izabel Chapelhow",
    avatar: "https://robohash.org/autvitaeatque.png?size=50x50&set=set1",
    university: "American University of Iraq, Sulaimani (Kurdistan Region)",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    email: "ichapelhowbe@issuu.com",
  },
  {
    color: "#159644",
    name: "Merci Vinten",
    avatar:
      "https://robohash.org/nemonecessitatibusnam.png?size=50x50&set=set1",
    university: "Aga Khan University",
    sentences:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    email: "mvintenbf@usnews.com",
  },
  {
    color: "#7bfd92",
    name: "Chas Windrus",
    avatar: "https://robohash.org/distinctioquiaet.png?size=50x50&set=set1",
    university: "Daiichi College of Pharmaceutical Sciences",
    sentences:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    email: "cwindrusbg@wufoo.com",
  },
  {
    color: "#ea6239",
    name: "Madelena Hustler",
    avatar: "https://robohash.org/eavoluptasmaiores.png?size=50x50&set=set1",
    university: "Rockhurst College",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    email: "mhustlerbh@about.me",
  },
  {
    color: "#eec105",
    name: "Lauraine de Zamora",
    avatar: "https://robohash.org/enimveniamfacere.png?size=50x50&set=set1",
    university: "United States Military Academy",
    sentences:
      "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    email: "ldebi@washington.edu",
  },
  {
    color: "#90d2e5",
    name: "Aron Ondrak",
    avatar: "https://robohash.org/consequaturfugaiure.png?size=50x50&set=set1",
    university: "Miyagi Gakuin Women's College",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    email: "aondrakbj@weather.com",
  },
  {
    color: "#b6565d",
    name: "Brandice Merdew",
    avatar: "https://robohash.org/beataesaepeipsum.png?size=50x50&set=set1",
    university: "Perm State Pedagogical University",
    sentences:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    email: "bmerdewbk@so-net.ne.jp",
  },
  {
    color: "#44ae80",
    name: "Ray Yurkov",
    avatar: "https://robohash.org/undeenimvoluptas.png?size=50x50&set=set1",
    university: "Texas College",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    email: "ryurkovbl@apple.com",
  },
  {
    color: "#7243c7",
    name: "Byram Stone",
    avatar: "https://robohash.org/aututconsequatur.png?size=50x50&set=set1",
    university: "Persian Gulf University",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    email: "bstonebm@plala.or.jp",
  },
  {
    color: "#1d59b8",
    name: "Luciano Dionis",
    avatar: "https://robohash.org/quasharumfuga.png?size=50x50&set=set1",
    university: "Jiangxi University of Traditional Chinese Medicine",
    sentences: "Donec semper sapien a libero. Nam dui.",
    email: "ldionisbn@furl.net",
  },
  {
    color: "#ebeec1",
    name: "Taylor Winthrop",
    avatar:
      "https://robohash.org/officiisperspiciatisdistinctio.png?size=50x50&set=set1",
    university:
      "Yaroslavl International University of Business and New Technologies",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    email: "twinthropbo@twitpic.com",
  },
  {
    color: "#3b59f5",
    name: "Carilyn De Anesy",
    avatar:
      "https://robohash.org/dignissimosharumoptio.png?size=50x50&set=set1",
    university:
      "Hochschule für Bankwirtschaft (HfB), Private Fachhochschule der Bankakademie",
    sentences:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    email: "cdebp@live.com",
  },
  {
    color: "#f2387e",
    name: "Lexie Leeuwerink",
    avatar: "https://robohash.org/eumvoluptasquae.png?size=50x50&set=set1",
    university: "Illinois Benedictine University",
    sentences:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    email: "lleeuwerinkbq@unblog.fr",
  },
  {
    color: "#153dae",
    name: "Maure Martinyuk",
    avatar:
      "https://robohash.org/nihilvoluptasblanditiis.png?size=50x50&set=set1",
    university: "Malayer University",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    email: "mmartinyukbr@newyorker.com",
  },
  {
    color: "#848216",
    name: "Alejoa Temple",
    avatar:
      "https://robohash.org/doloresvoluptatemlibero.png?size=50x50&set=set1",
    university: "Dixie College",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    email: "atemplebs@amazon.co.jp",
  },
  {
    color: "#536f5a",
    name: "Dani Amoore",
    avatar: "https://robohash.org/consecteturomnisquod.png?size=50x50&set=set1",
    university: "Université Sidi Mohammed Ben Abdellah",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "damoorebt@woothemes.com",
  },
  {
    color: "#cc042f",
    name: "Immanuel Abrahart",
    avatar: "https://robohash.org/auteaest.png?size=50x50&set=set1",
    university: "Hubei University",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    email: "iabrahartbu@google.es",
  },
  {
    color: "#2b7638",
    name: "Shalne McDonnell",
    avatar: "https://robohash.org/delenitiasperioreset.png?size=50x50&set=set1",
    university: "Cleary College",
    sentences:
      "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    email: "smcdonnellbv@foxnews.com",
  },
  {
    color: "#938750",
    name: "Mic Szymonwicz",
    avatar:
      "https://robohash.org/mollitiaomnismolestias.png?size=50x50&set=set1",
    university: "Universidad Nueva San Salvador",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "mszymonwiczbw@aboutads.info",
  },
  {
    color: "#046439",
    name: "Cash Pashan",
    avatar: "https://robohash.org/ipsumestsed.png?size=50x50&set=set1",
    university: "Universidade Federal da Grande Dourados",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    email: "cpashanbx@utexas.edu",
  },
  {
    color: "#cff538",
    name: "Bobette Gerardot",
    avatar: "https://robohash.org/remveroodit.png?size=50x50&set=set1",
    university: "Gulbarga University",
    sentences:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "bgerardotby@hp.com",
  },
  {
    color: "#fd83f2",
    name: "Ollie Trenholme",
    avatar:
      "https://robohash.org/repellendussapientedicta.png?size=50x50&set=set1",
    university: "Trinity University",
    sentences:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    email: "otrenholmebz@tripadvisor.com",
  },
  {
    color: "#2b2e21",
    name: "Garret Japp",
    avatar: "https://robohash.org/eaprovidentet.png?size=50x50&set=set1",
    university: "San Jose Christian College",
    sentences: "Phasellus in felis. Donec semper sapien a libero.",
    email: "gjappc0@psu.edu",
  },
  {
    color: "#4a66de",
    name: "Penni Ellcock",
    avatar: "https://robohash.org/optioutvoluptatem.png?size=50x50&set=set1",
    university: "Hochschule Magdeburg-Stendal (FH)",
    sentences: "Suspendisse potenti.",
    email: "pellcockc1@imdb.com",
  },
  {
    color: "#33b5b8",
    name: "Nikolos Kobierra",
    avatar:
      "https://robohash.org/voluptatibusettempore.png?size=50x50&set=set1",
    university: "University of Agriculture and Veterinary Medicine Iasi",
    sentences: "Morbi a ipsum. Integer a nibh. In quis justo.",
    email: "nkobierrac2@1688.com",
  },
  {
    color: "#c8a50c",
    name: "Sandie Humber",
    avatar:
      "https://robohash.org/perferendisreprehenderitconsectetur.png?size=50x50&set=set1",
    university: "Holy Cross College",
    sentences:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    email: "shumberc3@usnews.com",
  },
  {
    color: "#f258f5",
    name: "Chantal Strase",
    avatar: "https://robohash.org/minimaestab.png?size=50x50&set=set1",
    university: "Universidad de La Salle, Bajío",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    email: "cstrasec4@europa.eu",
  },
  {
    color: "#647d9d",
    name: "Fannie Gent",
    avatar: "https://robohash.org/rerummollitiaoptio.png?size=50x50&set=set1",
    university: "Agricultural University of Szczecin",
    sentences:
      "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    email: "fgentc5@slate.com",
  },
  {
    color: "#e8cc6a",
    name: "Hannis Plover",
    avatar: "https://robohash.org/autvoluptatibusin.png?size=50x50&set=set1",
    university: "Universidad Nacional Agraria",
    sentences:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    email: "hploverc6@rakuten.co.jp",
  },
  {
    color: "#75a481",
    name: "Tilda Bonehill",
    avatar: "https://robohash.org/quiconsequunturipsa.png?size=50x50&set=set1",
    university: "CMJ University",
    sentences:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    email: "tbonehillc7@time.com",
  },
  {
    color: "#6bcb4a",
    name: "Mychal Francescuccio",
    avatar: "https://robohash.org/inventoreexexpedita.png?size=50x50&set=set1",
    university: "Pedagogical University of Bydgoszcz",
    sentences: "Donec semper sapien a libero. Nam dui.",
    email: "mfrancescuccioc8@marriott.com",
  },
  {
    color: "#fb8d75",
    name: "Fancy Keeri",
    avatar: "https://robohash.org/autipsamquo.png?size=50x50&set=set1",
    university: "Central European University",
    sentences:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    email: "fkeeric9@jugem.jp",
  },
  {
    color: "#3f8e35",
    name: "Xerxes Cavy",
    avatar: "https://robohash.org/errornonrepellat.png?size=50x50&set=set1",
    university: "California University of Management and Sciences",
    sentences:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "xcavyca@dmoz.org",
  },
  {
    color: "#6fc010",
    name: "Harrietta Monnelly",
    avatar: "https://robohash.org/iustoquiaeius.png?size=50x50&set=set1",
    university: "University of Parma",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    email: "hmonnellycb@feedburner.com",
  },
  {
    color: "#f4112a",
    name: "Rutledge McOrkill",
    avatar: "https://robohash.org/doloremvelitest.png?size=50x50&set=set1",
    university: "Ozark Christian College",
    sentences:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    email: "rmcorkillcc@cyberchimps.com",
  },
  {
    color: "#3f08ac",
    name: "Georgeanna Hanselmann",
    avatar:
      "https://robohash.org/omniscumquepraesentium.png?size=50x50&set=set1",
    university: "Ecole Nationale Supérieure de Techniques Avancées",
    sentences:
      "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    email: "ghanselmanncd@dropbox.com",
  },
  {
    color: "#2645d4",
    name: "Bess Lindfors",
    avatar: "https://robohash.org/nequedeseruntearum.png?size=50x50&set=set1",
    university: "Merlimau Polytechnic",
    sentences: "Donec ut mauris eget massa tempor convallis.",
    email: "blindforsce@java.com",
  },
  {
    color: "#f5c4b0",
    name: "Hedvig Fulcher",
    avatar:
      "https://robohash.org/eummollitiavoluptatem.png?size=50x50&set=set1",
    university: "Kerala Agricultural University",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    email: "hfulchercf@canalblog.com",
  },
  {
    color: "#e4b453",
    name: "Dorena Joberne",
    avatar: "https://robohash.org/quiaquiet.png?size=50x50&set=set1",
    university: "Qufu Normal University",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    email: "djobernecg@sina.com.cn",
  },
  {
    color: "#6c35b3",
    name: "Base Theodoris",
    avatar: "https://robohash.org/omnisautet.png?size=50x50&set=set1",
    university: "Universidad de Manizales",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    email: "btheodorisch@feedburner.com",
  },
  {
    color: "#b6e2be",
    name: "Sunny Flatte",
    avatar: "https://robohash.org/erroroptioaliquid.png?size=50x50&set=set1",
    university: "University of Johannesburg",
    sentences: "Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "sflatteci@yellowbook.com",
  },
  {
    color: "#4a84a1",
    name: "Prudence Agdahl",
    avatar: "https://robohash.org/eosestet.png?size=50x50&set=set1",
    university: "College of Computer Science in Lodz",
    sentences:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    email: "pagdahlcj@indiatimes.com",
  },
  {
    color: "#6f9f32",
    name: "Etheline Kellen",
    avatar: "https://robohash.org/veliteumet.png?size=50x50&set=set1",
    university: "National University",
    sentences: "Sed sagittis.",
    email: "ekellenck@flavors.me",
  },
  {
    color: "#6dcc4b",
    name: "Dagmar Kirkland",
    avatar: "https://robohash.org/idsuscipitautem.png?size=50x50&set=set1",
    university: "Sir Syed Institute Of Technology Islamabad",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    email: "dkirklandcl@deviantart.com",
  },
  {
    color: "#0634de",
    name: "Marshal Skayman",
    avatar: "https://robohash.org/iureplaceatea.png?size=50x50&set=set1",
    university: "Cheyney University of Pennsylvania",
    sentences: "Morbi quis tortor id nulla ultrices aliquet.",
    email: "mskaymancm@salon.com",
  },
  {
    color: "#4a3e14",
    name: "Sully Girodias",
    avatar: "https://robohash.org/quotemporaet.png?size=50x50&set=set1",
    university: "Beijing University of Posts and Telecommunications",
    sentences:
      "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    email: "sgirodiascn@flavors.me",
  },
  {
    color: "#de1f1f",
    name: "Sergio Sprouls",
    avatar: "https://robohash.org/sedsuntid.png?size=50x50&set=set1",
    university: "Xinjiang University of Finance and Economics",
    sentences: "Proin at turpis a pede posuere nonummy. Integer non velit.",
    email: "ssproulsco@comcast.net",
  },
  {
    color: "#b68a4e",
    name: "Marshall Hookes",
    avatar: "https://robohash.org/eumnonest.png?size=50x50&set=set1",
    university: "Brown University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    email: "mhookescp@statcounter.com",
  },
  {
    color: "#29c896",
    name: "Eb Trewartha",
    avatar: "https://robohash.org/magnamdeseruntut.png?size=50x50&set=set1",
    university: "University of Dublin, Trinity College",
    sentences: "Aliquam erat volutpat. In congue.",
    email: "etrewarthacq@irs.gov",
  },
  {
    color: "#9de326",
    name: "Don Ivasyushkin",
    avatar:
      "https://robohash.org/voluptatemassumendamagni.png?size=50x50&set=set1",
    university: "Universidad Nacional Experimental de la Fuerza Armada",
    sentences:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    email: "divasyushkincr@loc.gov",
  },
  {
    color: "#cdad48",
    name: "Renato Perulli",
    avatar:
      "https://robohash.org/porroinciduntconsectetur.png?size=50x50&set=set1",
    university: "Eiilm University",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
    email: "rperullics@businessinsider.com",
  },
  {
    color: "#39ceb0",
    name: "Ransom Gower",
    avatar: "https://robohash.org/ipsamutmodi.png?size=50x50&set=set1",
    university: "California State University, Hayward",
    sentences: "Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    email: "rgowerct@bravesites.com",
  },
  {
    color: "#ca1500",
    name: "Michal Saint",
    avatar: "https://robohash.org/autautrepudiandae.png?size=50x50&set=set1",
    university: "An-Najah National University",
    sentences:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    email: "msaintcu@miitbeian.gov.cn",
  },
  {
    color: "#8a81f4",
    name: "Rodolph Shulem",
    avatar: "https://robohash.org/etquasiperspiciatis.png?size=50x50&set=set1",
    university: "University of West Los Angeles",
    sentences: "In blandit ultrices enim.",
    email: "rshulemcv@hugedomains.com",
  },
  {
    color: "#7a91a6",
    name: "Brade MacDermid",
    avatar: "https://robohash.org/ullamenimrerum.png?size=50x50&set=set1",
    university: "Schiller International University, Paris",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    email: "bmacdermidcw@joomla.org",
  },
  {
    color: "#f05d14",
    name: "Ariana Gibbons",
    avatar: "https://robohash.org/cupiditateetquidem.png?size=50x50&set=set1",
    university:
      "Ecole Supérieure Internationale d'Administration des Entreprises",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    email: "agibbonscx@ask.com",
  },
  {
    color: "#475d72",
    name: "Abram Boor",
    avatar: "https://robohash.org/voluptasveritatiset.png?size=50x50&set=set1",
    university: "Sang Myung University",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    email: "aboorcy@uol.com.br",
  },
  {
    color: "#acbbf6",
    name: "Maegan Ladon",
    avatar: "https://robohash.org/etetquas.png?size=50x50&set=set1",
    university: "University of Iowa",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    email: "mladoncz@flavors.me",
  },
  {
    color: "#5f9284",
    name: "Elana Vasilevich",
    avatar:
      "https://robohash.org/accusantiumautcorporis.png?size=50x50&set=set1",
    university: 'University "Aurel Vlaicu" Arad',
    sentences:
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    email: "evasilevichd0@mapquest.com",
  },
  {
    color: "#ce248f",
    name: "Dyan Rains",
    avatar: "https://robohash.org/vitaeoditquod.png?size=50x50&set=set1",
    university: "Jimei University",
    sentences:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    email: "drainsd1@opensource.org",
  },
  {
    color: "#cf2899",
    name: "Vin Goundry",
    avatar: "https://robohash.org/eumullamest.png?size=50x50&set=set1",
    university: "ITT Technical Institute West Covina",
    sentences:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    email: "vgoundryd2@a8.net",
  },
  {
    color: "#8f6886",
    name: "Danyelle Dy",
    avatar: "https://robohash.org/utsuntaut.png?size=50x50&set=set1",
    university: "Technische Fachhochschule Wildau",
    sentences:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    email: "ddyd3@goo.ne.jp",
  },
  {
    color: "#ebc747",
    name: "Sherman Divers",
    avatar: "https://robohash.org/utporrodolorem.png?size=50x50&set=set1",
    university: "Benedictine College",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "sdiversd4@technorati.com",
  },
  {
    color: "#b7d98a",
    name: "Bar Locks",
    avatar:
      "https://robohash.org/saepereiciendisconsequatur.png?size=50x50&set=set1",
    university: "Batterjee Medical College",
    sentences:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    email: "blocksd5@google.ca",
  },
  {
    color: "#693085",
    name: "Timofei Brose",
    avatar: "https://robohash.org/cumquenemohic.png?size=50x50&set=set1",
    university: "University of National and World Economy",
    sentences: "Vivamus vel nulla eget eros elementum pellentesque.",
    email: "tbrosed6@ebay.co.uk",
  },
  {
    color: "#15e6a9",
    name: "Goddart Stobo",
    avatar: "https://robohash.org/quiilloeos.png?size=50x50&set=set1",
    university: "Universidad de Puerto Rico, Aguadilla",
    sentences: "Nulla mollis molestie lorem.",
    email: "gstobod7@symantec.com",
  },
  {
    color: "#022098",
    name: "Norene Boas",
    avatar: "https://robohash.org/praesentiumidtempore.png?size=50x50&set=set1",
    university: "University of London",
    sentences:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    email: "nboasd8@privacy.gov.au",
  },
  {
    color: "#1e65d2",
    name: "Cesar Roache",
    avatar: "https://robohash.org/recusandaenullanon.png?size=50x50&set=set1",
    university: "Nanjing University of Chemical Technology",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    email: "croached9@rakuten.co.jp",
  },
  {
    color: "#a7e891",
    name: "Catherine Finnie",
    avatar: "https://robohash.org/etatrerum.png?size=50x50&set=set1",
    university: "Tietgen Business College",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
    email: "cfinnieda@skype.com",
  },
  {
    color: "#084ade",
    name: "Germaine Barnewell",
    avatar:
      "https://robohash.org/cumnecessitatibustotam.png?size=50x50&set=set1",
    university: "University of Akureyri",
    sentences:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "gbarnewelldb@bloomberg.com",
  },
  {
    color: "#f76179",
    name: "Ruprecht Hodgins",
    avatar: "https://robohash.org/auteanemo.png?size=50x50&set=set1",
    university: "National Pirogov Memorial Medical University",
    sentences: "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "rhodginsdc@pbs.org",
  },
  {
    color: "#1557db",
    name: "Ame Jenkerson",
    avatar: "https://robohash.org/molestiaeminimaerror.png?size=50x50&set=set1",
    university: "Evangelische Fachhochschule Darmstadt",
    sentences:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    email: "ajenkersondd@blogspot.com",
  },
  {
    color: "#2694dd",
    name: "Jamie Ditty",
    avatar: "https://robohash.org/illoconsequaturaut.png?size=50x50&set=set1",
    university: "Abai State University",
    sentences:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    email: "jdittyde@histats.com",
  },
  {
    color: "#83dd32",
    name: "Lovell Felce",
    avatar:
      "https://robohash.org/enimquidemperspiciatis.png?size=50x50&set=set1",
    university: "Louisiana State University at Eunice",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    email: "lfelcedf@soup.io",
  },
  {
    color: "#4080ce",
    name: "Olympie Glowacz",
    avatar:
      "https://robohash.org/praesentiumtemporeaccusamus.png?size=50x50&set=set1",
    university: "Universität für Bodenkultur Wien",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    email: "oglowaczdg@cnbc.com",
  },
  {
    color: "#ad3e78",
    name: "Krysta Grafom",
    avatar: "https://robohash.org/doloremadipsam.png?size=50x50&set=set1",
    university: "British Malaysian Institute",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "kgrafomdh@aol.com",
  },
  {
    color: "#7d6b9d",
    name: "Morry Furst",
    avatar:
      "https://robohash.org/cupiditateharumarchitecto.png?size=50x50&set=set1",
    university: "Champlain College",
    sentences:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    email: "mfurstdi@imdb.com",
  },
  {
    color: "#753389",
    name: "Mohammed Ralston",
    avatar:
      "https://robohash.org/inciduntpossimusimpedit.png?size=50x50&set=set1",
    university: "Kingston University",
    sentences:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    email: "mralstondj@icq.com",
  },
  {
    color: "#6603be",
    name: "Barron O'Fairy",
    avatar: "https://robohash.org/utdoloresiure.png?size=50x50&set=set1",
    university: "Université de Toulouse-le-Mirail (Toulouse II)",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "bofairydk@behance.net",
  },
  {
    color: "#351d3e",
    name: "Maybelle Mincher",
    avatar:
      "https://robohash.org/accusantiumvoluptatestenetur.png?size=50x50&set=set1",
    university: "King's University College",
    sentences:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "mmincherdl@ox.ac.uk",
  },
  {
    color: "#5ad45d",
    name: "Nisse Matushenko",
    avatar: "https://robohash.org/culpavoluptatemut.png?size=50x50&set=set1",
    university: "Chukyo Women's University",
    sentences: "Morbi vel lectus in quam fringilla rhoncus.",
    email: "nmatushenkodm@mtv.com",
  },
  {
    color: "#1fd5fa",
    name: "Latashia Nand",
    avatar: "https://robohash.org/iurealiquammagnam.png?size=50x50&set=set1",
    university: "Shanghai Jiaotong University",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    email: "lnanddn@sbwire.com",
  },
  {
    color: "#3de8b0",
    name: "Jade Swires",
    avatar: "https://robohash.org/quisinteligendi.png?size=50x50&set=set1",
    university: "California Lutheran University",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    email: "jswiresdo@exblog.jp",
  },
  {
    color: "#9ea0c9",
    name: "Cookie Rowth",
    avatar: "https://robohash.org/velvoluptatemmodi.png?size=50x50&set=set1",
    university: "Tenri University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "crowthdp@amazon.com",
  },
  {
    color: "#e53437",
    name: "Virge Eddis",
    avatar: "https://robohash.org/nesciuntfugadolor.png?size=50x50&set=set1",
    university: "Gifu University",
    sentences:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    email: "veddisdq@google.com.hk",
  },
  {
    color: "#8dca75",
    name: "Rowena Kingston",
    avatar: "https://robohash.org/laudantiumharumvelit.png?size=50x50&set=set1",
    university: "Paktia University",
    sentences: "Aenean sit amet justo. Morbi ut odio.",
    email: "rkingstondr@list-manage.com",
  },
  {
    color: "#088c17",
    name: "Cynde Kill",
    avatar:
      "https://robohash.org/placeatdignissimosrepudiandae.png?size=50x50&set=set1",
    university: "Technische Universität Ilmenau",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    email: "ckillds@about.me",
  },
  {
    color: "#51d7b6",
    name: "Milly Pawelec",
    avatar: "https://robohash.org/rerumestaut.png?size=50x50&set=set1",
    university: "Sunmoon University",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    email: "mpawelecdt@dailymail.co.uk",
  },
  {
    color: "#28bf24",
    name: "Erl Goldis",
    avatar:
      "https://robohash.org/ipsumvoluptatemprovident.png?size=50x50&set=set1",
    university: "Universidad de Valencia",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    email: "egoldisdu@netlog.com",
  },
  {
    color: "#d87bbe",
    name: "Devin Mitchenson",
    avatar:
      "https://robohash.org/distinctioinventoresunt.png?size=50x50&set=set1",
    university: "Harbin University of Civil Engineering & Architecture",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    email: "dmitchensondv@psu.edu",
  },
  {
    color: "#8d7f60",
    name: "Emelia Try",
    avatar: "https://robohash.org/temporibussaepeet.png?size=50x50&set=set1",
    university: "Universidad del Norte",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    email: "etrydw@skype.com",
  },
  {
    color: "#a2f1c9",
    name: "Mavra Biddle",
    avatar: "https://robohash.org/teneturidaut.png?size=50x50&set=set1",
    university: "Hochschule Zittau/Görlitz (FH)",
    sentences:
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    email: "mbiddledx@desdev.cn",
  },
  {
    color: "#c68889",
    name: "Thurston Wildblood",
    avatar:
      "https://robohash.org/perspiciatisnihildeleniti.png?size=50x50&set=set1",
    university: "Universidad de San Andres",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    email: "twildblooddy@apache.org",
  },
  {
    color: "#c949e6",
    name: "Candis Swadlin",
    avatar:
      "https://robohash.org/accusantiumdoloresquia.png?size=50x50&set=set1",
    university: "Islamic Azad University, Sanandaj",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    email: "cswadlindz@nymag.com",
  },
  {
    color: "#c447ed",
    name: "Jeddy Glaze",
    avatar: "https://robohash.org/expeditaestaliquam.png?size=50x50&set=set1",
    university: "Beijing Petroleum University",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    email: "jglazee0@guardian.co.uk",
  },
  {
    color: "#d47c4f",
    name: "Marilyn Bartolomeu",
    avatar: "https://robohash.org/quidemundeeum.png?size=50x50&set=set1",
    university: "Trinity College Connecticut",
    sentences:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    email: "mbartolomeue1@mysql.com",
  },
  {
    color: "#3245bc",
    name: "Casi Babbs",
    avatar: "https://robohash.org/harumquiassumenda.png?size=50x50&set=set1",
    university: "University of Abuja",
    sentences:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "cbabbse2@vimeo.com",
  },
  {
    color: "#7993d9",
    name: "Rori Binny",
    avatar: "https://robohash.org/adprovidentdicta.png?size=50x50&set=set1",
    university: "University of Kota",
    sentences:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    email: "rbinnye3@360.cn",
  },
  {
    color: "#b67670",
    name: "Fran Madison",
    avatar:
      "https://robohash.org/reiciendisvoluptatemdoloribus.png?size=50x50&set=set1",
    university: "Universidade do Oeste Paulista",
    sentences: "Donec quis orci eget orci vehicula condimentum.",
    email: "fmadisone4@so-net.ne.jp",
  },
  {
    color: "#34dfba",
    name: "Sibylla Attiwill",
    avatar: "https://robohash.org/quoquiavoluptates.png?size=50x50&set=set1",
    university: "Texas Woman's University",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    email: "sattiwille5@japanpost.jp",
  },
  {
    color: "#66c786",
    name: "Godiva Ubsdell",
    avatar: "https://robohash.org/fugiatquisodio.png?size=50x50&set=set1",
    university: "Katholische Stiftungsfachhochschule München",
    sentences: "Donec semper sapien a libero. Nam dui.",
    email: "gubsdelle6@blog.com",
  },
  {
    color: "#604a86",
    name: "Hyacinth Bridgens",
    avatar:
      "https://robohash.org/eadeseruntaccusantium.png?size=50x50&set=set1",
    university: "Instituts Supérieurs des Etudes Technologiques",
    sentences:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    email: "hbridgense7@feedburner.com",
  },
  {
    color: "#c9ac4a",
    name: "Karrie Fullman",
    avatar: "https://robohash.org/explicaboiurelibero.png?size=50x50&set=set1",
    university: "Gulf Medical University",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    email: "kfullmane8@tiny.cc",
  },
  {
    color: "#e1abbd",
    name: "Rab Camilli",
    avatar: "https://robohash.org/eiusnisienim.png?size=50x50&set=set1",
    university: "University of Aizu",
    sentences:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    email: "rcamillie9@bluehost.com",
  },
  {
    color: "#a3e304",
    name: "Roy Kristufek",
    avatar: "https://robohash.org/eteosipsa.png?size=50x50&set=set1",
    university:
      "Ho Chi Minh City University of Foreign Languages and Information Technology",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    email: "rkristufekea@google.ru",
  },
  {
    color: "#f8e397",
    name: "Willdon Mayes",
    avatar: "https://robohash.org/suntdictatotam.png?size=50x50&set=set1",
    university: "Kolej Universiti Insaniah",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    email: "wmayeseb@smh.com.au",
  },
  {
    color: "#1806c6",
    name: "Rosana Menci",
    avatar:
      "https://robohash.org/pariaturprovidentmolestiae.png?size=50x50&set=set1",
    university: "Messiah College",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "rmenciec@bbb.org",
  },
  {
    color: "#6e83f6",
    name: "Roshelle Gellion",
    avatar: "https://robohash.org/doloribusenimautem.png?size=50x50&set=set1",
    university: "Hartford Graduate Center (Rensselaer at Hartford)",
    sentences:
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    email: "rgellioned@addthis.com",
  },
  {
    color: "#b30e7f",
    name: "Maritsa Cardo",
    avatar:
      "https://robohash.org/inciduntvoluptatemeos.png?size=50x50&set=set1",
    university: "Centro de Estudios Avanzados de Puerto Rico y el Caribe",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    email: "mcardoee@aol.com",
  },
  {
    color: "#3b0f19",
    name: "Geralda Castro",
    avatar: "https://robohash.org/quodautut.png?size=50x50&set=set1",
    university: "Ho Chi Minh City University of Law",
    sentences:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "gcastroef@shutterfly.com",
  },
  {
    color: "#72dbb1",
    name: "Phillipe Kinglesyd",
    avatar: "https://robohash.org/abdelenitiin.png?size=50x50&set=set1",
    university: "National Medical University O.O. Bogomolets",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    email: "pkinglesydeg@mediafire.com",
  },
  {
    color: "#2ffbee",
    name: "Netty Sanchez",
    avatar: "https://robohash.org/rerumremdoloremque.png?size=50x50&set=set1",
    university: "New York Medical College",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    email: "nsanchezeh@cdc.gov",
  },
  {
    color: "#4094ff",
    name: "Jenna Littell",
    avatar:
      "https://robohash.org/accusamusenimveritatis.png?size=50x50&set=set1",
    university: "St. Meinrad College",
    sentences:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    email: "jlittellei@dropbox.com",
  },
  {
    color: "#436413",
    name: "Alyss Callander",
    avatar: "https://robohash.org/modieligendinesciunt.png?size=50x50&set=set1",
    university: "Universidad Autónoma de Bucaramanga",
    sentences:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    email: "acallanderej@phpbb.com",
  },
  {
    color: "#35a974",
    name: "Merrielle Dummett",
    avatar:
      "https://robohash.org/consequaturcommodicum.png?size=50x50&set=set1",
    university:
      "Ecole Nationale Supérieure d'Electrochimie et d'Electrométallurgie de Gernoble",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    email: "mdummettek@nymag.com",
  },
  {
    color: "#7f8fb0",
    name: "Jacquelyn Gleaves",
    avatar: "https://robohash.org/optioconsequaturqui.png?size=50x50&set=set1",
    university: "American College of Thessaloniki",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    email: "jgleavesel@dailymotion.com",
  },
  {
    color: "#7994f4",
    name: "Janela Sherreard",
    avatar:
      "https://robohash.org/nostrumvoluptatibusaspernatur.png?size=50x50&set=set1",
    university: "Salve Regina University",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    email: "jsherreardem@usda.gov",
  },
  {
    color: "#531102",
    name: "Fawne Rickert",
    avatar:
      "https://robohash.org/asperioresquaeratipsa.png?size=50x50&set=set1",
    university: "Zahedan University of Medical Sciences",
    sentences: "Nunc rhoncus dui vel sem. Sed sagittis.",
    email: "frickerten@shareasale.com",
  },
  {
    color: "#4a7e93",
    name: "Harriott Whiskin",
    avatar:
      "https://robohash.org/rationeveritatisalias.png?size=50x50&set=set1",
    university: "Greenville College",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    email: "hwhiskineo@google.com.hk",
  },
  {
    color: "#f23b86",
    name: "Gennifer Tabord",
    avatar:
      "https://robohash.org/corporislaborumreiciendis.png?size=50x50&set=set1",
    university: "National University of Kiev-Mohyla Academy",
    sentences:
      "Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    email: "gtabordep@gov.uk",
  },
  {
    color: "#e96d42",
    name: "Concettina Shipperbottom",
    avatar: "https://robohash.org/quasimolestiaequidem.png?size=50x50&set=set1",
    university: "Kigali Institute of Science & Technology",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "cshipperbottomeq@state.gov",
  },
  {
    color: "#8d2dae",
    name: "Pansy Hall",
    avatar: "https://robohash.org/etpossimusea.png?size=50x50&set=set1",
    university: "Ecole Nationale de l'Aviation Civile",
    sentences: "Nullam varius.",
    email: "phaller@slideshare.net",
  },
  {
    color: "#e81566",
    name: "Giulietta Forde",
    avatar: "https://robohash.org/etdoloredolorem.png?size=50x50&set=set1",
    university: "Australian Defence Force Academy",
    sentences:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    email: "gfordees@wsj.com",
  },
  {
    color: "#3893b1",
    name: "Neille Laise",
    avatar:
      "https://robohash.org/molestiaslaboriosamnisi.png?size=50x50&set=set1",
    university: "University of Siena",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    email: "nlaiseet@reuters.com",
  },
  {
    color: "#322af1",
    name: "Theodore Gooday",
    avatar: "https://robohash.org/autquiaet.png?size=50x50&set=set1",
    university: "University of Stirling",
    sentences:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    email: "tgoodayeu@aboutads.info",
  },
  {
    color: "#bbb2f6",
    name: "Craig Sails",
    avatar: "https://robohash.org/doloremautest.png?size=50x50&set=set1",
    university: "Wartburg College",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    email: "csailsev@forbes.com",
  },
  {
    color: "#76bfc5",
    name: "Miran Shrubsall",
    avatar: "https://robohash.org/quiexad.png?size=50x50&set=set1",
    university: "Universidad de Montemorelos",
    sentences:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    email: "mshrubsallew@desdev.cn",
  },
  {
    color: "#b6f333",
    name: "Karyl Brewett",
    avatar: "https://robohash.org/temporaeaqui.png?size=50x50&set=set1",
    university: "Universidad Latinoamericana",
    sentences:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    email: "kbrewettex@discuz.net",
  },
  {
    color: "#6f6210",
    name: "Rhodia Sidwell",
    avatar: "https://robohash.org/velcupiditatequis.png?size=50x50&set=set1",
    university: "Universidade de Uberaba",
    sentences:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    email: "rsidwelley@harvard.edu",
  },
  {
    color: "#02827c",
    name: "Yale Pepperrall",
    avatar: "https://robohash.org/aliquidrepellatrerum.png?size=50x50&set=set1",
    university: "Meiji University of Oriental Medicine",
    sentences:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    email: "ypepperrallez@dailymotion.com",
  },
  {
    color: "#11a125",
    name: "Nonah Ilyuchyov",
    avatar: "https://robohash.org/quisedconsequatur.png?size=50x50&set=set1",
    university: "Shepherd College",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    email: "nilyuchyovf0@smh.com.au",
  },
  {
    color: "#03a699",
    name: "Nikoletta Augie",
    avatar: "https://robohash.org/enimvoluptasnam.png?size=50x50&set=set1",
    university: "Hungarian Academy of Fine Arts Budapest",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "naugief1@purevolume.com",
  },
  {
    color: "#099693",
    name: "Colby McCarney",
    avatar: "https://robohash.org/voluptatibuscumipsam.png?size=50x50&set=set1",
    university: "Mount Kenya University",
    sentences: "Aenean lectus. Pellentesque eget nunc.",
    email: "cmccarneyf2@multiply.com",
  },
  {
    color: "#4031c6",
    name: "Francklyn Yann",
    avatar:
      "https://robohash.org/eaquevoluptatesuscipit.png?size=50x50&set=set1",
    university: "Instituto Superior D. Afonso III - INUAF",
    sentences:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    email: "fyannf3@techcrunch.com",
  },
  {
    color: "#85abaf",
    name: "Dore Zelley",
    avatar:
      "https://robohash.org/velrecusandaeincidunt.png?size=50x50&set=set1",
    university: "Kanazawa Gakuin University",
    sentences: "Nam nulla.",
    email: "dzelleyf4@dropbox.com",
  },
  {
    color: "#96881c",
    name: "Ardath Gorham",
    avatar: "https://robohash.org/blanditiisoptioid.png?size=50x50&set=set1",
    university: "Tashkent School of Finance",
    sentences:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "agorhamf5@google.com.hk",
  },
  {
    color: "#b140aa",
    name: "Dorie Balhatchet",
    avatar: "https://robohash.org/nequeestperspiciatis.png?size=50x50&set=set1",
    university: "Christian Heritage College",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "dbalhatchetf6@multiply.com",
  },
  {
    color: "#c99762",
    name: "Barthel Nettle",
    avatar: "https://robohash.org/etmagniad.png?size=50x50&set=set1",
    university: "Bethel College Newton",
    sentences:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    email: "bnettlef7@bloomberg.com",
  },
  {
    color: "#e5c18d",
    name: "Roosevelt Tanzig",
    avatar: "https://robohash.org/doloremvoluptasquia.png?size=50x50&set=set1",
    university: "Cyprus College",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    email: "rtanzigf8@epa.gov",
  },
  {
    color: "#0de802",
    name: "Alvinia Davion",
    avatar: "https://robohash.org/aperiametdeserunt.png?size=50x50&set=set1",
    university: "Universidad Católica Andres Bello",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "adavionf9@barnesandnoble.com",
  },
  {
    color: "#5ffefe",
    name: "Rosalynd Trunchion",
    avatar: "https://robohash.org/inciduntetblanditiis.png?size=50x50&set=set1",
    university: "Sindh Agricultural University",
    sentences:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    email: "rtrunchionfa@cloudflare.com",
  },
  {
    color: "#5beafa",
    name: "Dusty Crann",
    avatar: "https://robohash.org/corporiseosaut.png?size=50x50&set=set1",
    university: "Philippine Christian University",
    sentences: "Duis ac nibh.",
    email: "dcrannfb@examiner.com",
  },
  {
    color: "#04a66b",
    name: "Wyatan Tremlett",
    avatar: "https://robohash.org/optioutin.png?size=50x50&set=set1",
    university: "Eastern Mennonite University",
    sentences:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    email: "wtremlettfc@netscape.com",
  },
  {
    color: "#73f57a",
    name: "Sterne O'Henehan",
    avatar: "https://robohash.org/corporisfacereut.png?size=50x50&set=set1",
    university: "Southeastern Louisiana University",
    sentences:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    email: "sohenehanfd@networkadvertising.org",
  },
  {
    color: "#652b83",
    name: "Harwell Luetchford",
    avatar: "https://robohash.org/quossitvoluptatibus.png?size=50x50&set=set1",
    university: "Indira Gandhi Agricultural University",
    sentences:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    email: "hluetchfordfe@economist.com",
  },
  {
    color: "#291dc0",
    name: "Amitie Crispe",
    avatar:
      "https://robohash.org/quolaudantiumrepellendus.png?size=50x50&set=set1",
    university: "Ecole Nationale des Sciences Géographiques",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
    email: "acrispeff@ask.com",
  },
  {
    color: "#7cadcb",
    name: "Rochester Beyne",
    avatar: "https://robohash.org/utvelita.png?size=50x50&set=set1",
    university: "Bahrain Polytechnic",
    sentences:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    email: "rbeynefg@discovery.com",
  },
  {
    color: "#cb4660",
    name: "Vassily Clevely",
    avatar: "https://robohash.org/cupiditatenisiiusto.png?size=50x50&set=set1",
    university: "Universitas Dr. R. Moestopo",
    sentences:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    email: "vclevelyfh@furl.net",
  },
  {
    color: "#8ccbee",
    name: "Cherilynn Keijser",
    avatar:
      "https://robohash.org/dignissimosexcepturiminima.png?size=50x50&set=set1",
    university: "Manipur University",
    sentences:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "ckeijserfi@cmu.edu",
  },
  {
    color: "#d7b313",
    name: "Brandea O'Dea",
    avatar: "https://robohash.org/fugareiciendisquis.png?size=50x50&set=set1",
    university: "Yazd Medical University",
    sentences:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "bodeafj@mapquest.com",
  },
  {
    color: "#4a3792",
    name: "Kaleena Bardell",
    avatar:
      "https://robohash.org/etvoluptatemaspernatur.png?size=50x50&set=set1",
    university: "Shaheed Rajaei Teacher Training University",
    sentences:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    email: "kbardellfk@bloomberg.com",
  },
  {
    color: "#59431b",
    name: "Ebba Ganiford",
    avatar: "https://robohash.org/explicaboquiaquaerat.png?size=50x50&set=set1",
    university: "Rasmussen College, Minnesota Campuses",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    email: "eganifordfl@taobao.com",
  },
  {
    color: "#0d3ab4",
    name: "Eb Brugman",
    avatar: "https://robohash.org/possimusetvoluptas.png?size=50x50&set=set1",
    university: "California Western School of Law",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    email: "ebrugmanfm@independent.co.uk",
  },
  {
    color: "#d94e8b",
    name: "Donnamarie Medland",
    avatar:
      "https://robohash.org/nobisdoloresdoloribus.png?size=50x50&set=set1",
    university: "National Institute of Industrial Engineering",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    email: "dmedlandfn@meetup.com",
  },
  {
    color: "#ff2877",
    name: "Fielding Jennemann",
    avatar: "https://robohash.org/sintautsapiente.png?size=50x50&set=set1",
    university: "Ecole Catholique d'Arts & Metiers",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    email: "fjennemannfo@mediafire.com",
  },
  {
    color: "#8e1052",
    name: "Anett Phateplace",
    avatar: "https://robohash.org/pariaturoccaecatiquo.png?size=50x50&set=set1",
    university: "Université Chrétienne du Nord d'Haiti",
    sentences: "In quis justo.",
    email: "aphateplacefp@theatlantic.com",
  },
  {
    color: "#57620c",
    name: "Park Brownlea",
    avatar:
      "https://robohash.org/doloremadipisciexercitationem.png?size=50x50&set=set1",
    university: "Thi Qar University",
    sentences: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
    email: "pbrownleafq@wufoo.com",
  },
  {
    color: "#3d0d44",
    name: "Bendix Ferrini",
    avatar: "https://robohash.org/maiorestotamvero.png?size=50x50&set=set1",
    university: "Universidad Católica de Colombia",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    email: "bferrinifr@i2i.jp",
  },
  {
    color: "#57e4c5",
    name: "Sharity Goose",
    avatar: "https://robohash.org/sedautveniam.png?size=50x50&set=set1",
    university: "Symbiosis International University",
    sentences: "Maecenas pulvinar lobortis est.",
    email: "sgoosefs@histats.com",
  },
  {
    color: "#985132",
    name: "Sonja Ruddin",
    avatar: "https://robohash.org/nisiullamnon.png?size=50x50&set=set1",
    university:
      "Ecole Nationale Supérieure d'Ingénieurs en Mécanique et Energétique de Valenciennes",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "sruddinft@macromedia.com",
  },
  {
    color: "#460497",
    name: "Dominga Scouler",
    avatar: "https://robohash.org/voluptasinsint.png?size=50x50&set=set1",
    university: "Centro de Estudios Universitarios Xochicalco",
    sentences: "Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    email: "dscoulerfu@feedburner.com",
  },
  {
    color: "#7f257f",
    name: "Rex Headingham",
    avatar: "https://robohash.org/arerumin.png?size=50x50&set=set1",
    university: "Taeshin Christian University",
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    email: "rheadinghamfv@cafepress.com",
  },
  {
    color: "#a88b26",
    name: "Hatti Gieves",
    avatar: "https://robohash.org/iddignissimosipsum.png?size=50x50&set=set1",
    university: "Universidad Iberoamericana, Campus León",
    sentences:
      "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "hgievesfw@wisc.edu",
  },
  {
    color: "#4555ec",
    name: "Teodoor Pitkin",
    avatar:
      "https://robohash.org/doloresipsumvoluptatibus.png?size=50x50&set=set1",
    university: "University of Colorado at Boulder",
    sentences: "Nulla ac enim.",
    email: "tpitkinfx@blogspot.com",
  },
  {
    color: "#d990b3",
    name: "Elvin Vedstra",
    avatar: "https://robohash.org/quidemremvitae.png?size=50x50&set=set1",
    university: "University of Jos",
    sentences:
      "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    email: "evedstrafy@fastcompany.com",
  },
  {
    color: "#53c076",
    name: "Jan Longfellow",
    avatar: "https://robohash.org/sintillotempora.png?size=50x50&set=set1",
    university: "Siberian State Transport University",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    email: "jlongfellowfz@bloglines.com",
  },
  {
    color: "#95d820",
    name: "Luisa Glenfield",
    avatar: "https://robohash.org/aliquidametculpa.png?size=50x50&set=set1",
    university: "Henan Buddhist College",
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    email: "lglenfieldg0@vinaora.com",
  },
  {
    color: "#2c204e",
    name: "Kyle Tilbey",
    avatar: "https://robohash.org/laudantiumetunde.png?size=50x50&set=set1",
    university: "Universidad del Azuay",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    email: "ktilbeyg1@theglobeandmail.com",
  },
  {
    color: "#240d5b",
    name: "Cornall Mohammed",
    avatar:
      "https://robohash.org/consequaturdignissimosipsum.png?size=50x50&set=set1",
    university: "Universidad del Sagrado Corazon",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    email: "cmohammedg2@wisc.edu",
  },
  {
    color: "#0468f3",
    name: "Felizio Tellenbroker",
    avatar: "https://robohash.org/quasisititaque.png?size=50x50&set=set1",
    university: "Prince Mohammad Bin Fahd University",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    email: "ftellenbrokerg3@seattletimes.com",
  },
  {
    color: "#6f3675",
    name: "Lelia Wykey",
    avatar: "https://robohash.org/fugitvoluptatemeos.png?size=50x50&set=set1",
    university: "Yanbu Technical Institute",
    sentences:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "lwykeyg4@mapy.cz",
  },
  {
    color: "#d603b2",
    name: "Burke Ghiron",
    avatar: "https://robohash.org/etrerumreprehenderit.png?size=50x50&set=set1",
    university: "Mokwon University Taejon",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    email: "bghirong5@rakuten.co.jp",
  },
  {
    color: "#674fd0",
    name: "Oralle Lavell",
    avatar: "https://robohash.org/ipsanihilplaceat.png?size=50x50&set=set1",
    university: "Wells College",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    email: "olavellg6@gmpg.org",
  },
  {
    color: "#f04ac4",
    name: "Sibylla Litton",
    avatar: "https://robohash.org/quasquispariatur.png?size=50x50&set=set1",
    university: "Mogadishu University",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    email: "slittong7@discuz.net",
  },
  {
    color: "#7716c5",
    name: "Den Jedryka",
    avatar:
      "https://robohash.org/possimussapientedignissimos.png?size=50x50&set=set1",
    university: "Luxun Academy of Fine Art",
    sentences:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    email: "djedrykag8@networkadvertising.org",
  },
  {
    color: "#69f52a",
    name: "Bert Lukianov",
    avatar: "https://robohash.org/asperioresautest.png?size=50x50&set=set1",
    university: "Université d'Alger",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    email: "blukianovg9@ox.ac.uk",
  },
  {
    color: "#61afb1",
    name: "Veradis Jaquest",
    avatar: "https://robohash.org/culpaatqueaccusamus.png?size=50x50&set=set1",
    university: "Universidad de Viña del Mar",
    sentences:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "vjaquestga@dion.ne.jp",
  },
  {
    color: "#764aa0",
    name: "Jecho Groarty",
    avatar: "https://robohash.org/voluptatemomnisautem.png?size=50x50&set=set1",
    university: "Drzavni Univerzitet u Novom Pazaru",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    email: "jgroartygb@engadget.com",
  },
  {
    color: "#8ce20d",
    name: "Damien McCarver",
    avatar:
      "https://robohash.org/omnisexercitationemdolor.png?size=50x50&set=set1",
    university: "Fachhochschule Kufstein (Tirol)",
    sentences:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    email: "dmccarvergc@biglobe.ne.jp",
  },
  {
    color: "#f59c63",
    name: "Alexis Alessandrelli",
    avatar: "https://robohash.org/ipsamautquis.png?size=50x50&set=set1",
    university: "Universitas Nasional Jakarta",
    sentences:
      "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    email: "aalessandrelligd@cbsnews.com",
  },
  {
    color: "#8ef1e7",
    name: "Heda Gillice",
    avatar: "https://robohash.org/quiadvel.png?size=50x50&set=set1",
    university: "Federal University of Technology, Akure",
    sentences:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "hgillicege@globo.com",
  },
  {
    color: "#ef606a",
    name: "Lorette Widmore",
    avatar: "https://robohash.org/aperiamfugitut.png?size=50x50&set=set1",
    university: "Lyon College",
    sentences:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    email: "lwidmoregf@ucoz.com",
  },
  {
    color: "#2f33a2",
    name: "Dunstan Diess",
    avatar: "https://robohash.org/dictaeumodio.png?size=50x50&set=set1",
    university: "Oklahoma State University",
    sentences:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "ddiessgg@sourceforge.net",
  },
  {
    color: "#9fb1bb",
    name: "Wang Gater",
    avatar: "https://robohash.org/quimagniinventore.png?size=50x50&set=set1",
    university: "Birkbeck College, University of London",
    sentences:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    email: "wgatergh@linkedin.com",
  },
  {
    color: "#94d472",
    name: "Malcolm Burnitt",
    avatar:
      "https://robohash.org/officiatemporaoccaecati.png?size=50x50&set=set1",
    university: "University of Texas at Arlington",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    email: "mburnittgi@imageshack.us",
  },
  {
    color: "#29ff74",
    name: "Cy Mountford",
    avatar: "https://robohash.org/voluptasquianihil.png?size=50x50&set=set1",
    university: "Azzahra University",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    email: "cmountfordgj@mozilla.org",
  },
  {
    color: "#8216d0",
    name: "Elicia Koeppke",
    avatar:
      "https://robohash.org/accusantiumetvoluptates.png?size=50x50&set=set1",
    university: "Ecole Supérieure de Commerce de Rouen",
    sentences:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    email: "ekoeppkegk@yelp.com",
  },
  {
    color: "#a92677",
    name: "Perice Grass",
    avatar:
      "https://robohash.org/possimuseligendiipsum.png?size=50x50&set=set1",
    university: "Harding University Graduate School of Religion",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    email: "pgrassgl@edublogs.org",
  },
  {
    color: "#0ca25d",
    name: "Rebekah Behnecke",
    avatar: "https://robohash.org/nequeplaceatofficia.png?size=50x50&set=set1",
    university: "Universidad de Valparaiso",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    email: "rbehneckegm@oaic.gov.au",
  },
  {
    color: "#e69bc9",
    name: "Enoch Surfleet",
    avatar: "https://robohash.org/illoquamquae.png?size=50x50&set=set1",
    university: "Fachhochschule für Bank- und Finanzwirtschaft",
    sentences: "Nullam porttitor lacus at turpis.",
    email: "esurfleetgn@elegantthemes.com",
  },
  {
    color: "#588e2d",
    name: "Alan Brelsford",
    avatar: "https://robohash.org/sitearumest.png?size=50x50&set=set1",
    university: "The Catholic University of America",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    email: "abrelsfordgo@eepurl.com",
  },
  {
    color: "#6e098e",
    name: "Harald Arndell",
    avatar: "https://robohash.org/fugadelenitiet.png?size=50x50&set=set1",
    university: "Mid-American Bible College",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    email: "harndellgp@tinyurl.com",
  },
  {
    color: "#8896d4",
    name: "Barthel Vallentin",
    avatar: "https://robohash.org/laboreipsasuscipit.png?size=50x50&set=set1",
    university: "Greenwich University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "bvallentingq@plala.or.jp",
  },
  {
    color: "#ae2653",
    name: "Berkley Cafferky",
    avatar: "https://robohash.org/rationeminimanam.png?size=50x50&set=set1",
    university: "Baqai Medical University",
    sentences:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "bcafferkygr@is.gd",
  },
  {
    color: "#e282f1",
    name: "Teressa Chenery",
    avatar: "https://robohash.org/tenetureumaspernatur.png?size=50x50&set=set1",
    university: "University of Tennessee - Martin",
    sentences:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    email: "tchenerygs@epa.gov",
  },
  {
    color: "#4c8436",
    name: "Marmaduke Duff",
    avatar: "https://robohash.org/nullaexcepturisaepe.png?size=50x50&set=set1",
    university: "Prince Sultan College for Tourism and Hotel Scinces",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    email: "mduffgt@patch.com",
  },
  {
    color: "#fafd15",
    name: "Charlotta Mowday",
    avatar: "https://robohash.org/similiquepariatursed.png?size=50x50&set=set1",
    university: "Bloomfield College",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    email: "cmowdaygu@joomla.org",
  },
  {
    color: "#7734de",
    name: "Ayn Tincombe",
    avatar: "https://robohash.org/fugaautmagnam.png?size=50x50&set=set1",
    university: "University of Lodz",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    email: "atincombegv@edublogs.org",
  },
  {
    color: "#f820cd",
    name: "Alene Lugden",
    avatar: "https://robohash.org/quisquamfacereest.png?size=50x50&set=set1",
    university:
      "Academy of the Ministry of Internal Affairs of the Republic of Belarus",
    sentences: "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    email: "alugdengw@creativecommons.org",
  },
  {
    color: "#2f8d57",
    name: "Quintilla Margerrison",
    avatar:
      "https://robohash.org/aliquidmagnampariatur.png?size=50x50&set=set1",
    university: "Qinghai Normal University",
    sentences:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    email: "qmargerrisongx@weibo.com",
  },
  {
    color: "#226019",
    name: "Con Partrick",
    avatar: "https://robohash.org/quamomnisid.png?size=50x50&set=set1",
    university: "Louisiana Baptist University",
    sentences:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    email: "cpartrickgy@usgs.gov",
  },
  {
    color: "#9152c6",
    name: "Dionysus Johnys",
    avatar: "https://robohash.org/autemsitdolor.png?size=50x50&set=set1",
    university: "University of the Philippines Open University",
    sentences:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    email: "djohnysgz@nyu.edu",
  },
  {
    color: "#3f9dbc",
    name: "Vonny Evershed",
    avatar: "https://robohash.org/fugitdeseruntnobis.png?size=50x50&set=set1",
    university: "Universidad Interamericana de Puerto Rico, San Germán",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "vevershedh0@gravatar.com",
  },
  {
    color: "#f0d232",
    name: "Tucky Leonard",
    avatar: "https://robohash.org/omnisaccusamusquis.png?size=50x50&set=set1",
    university: "University Lucian Blaga of Sibiu",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    email: "tleonardh1@facebook.com",
  },
  {
    color: "#44affe",
    name: "Tabitha Castelow",
    avatar:
      "https://robohash.org/laudantiumrepellatminima.png?size=50x50&set=set1",
    university: "Universidade Vale do Paraiba",
    sentences:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "tcastelowh2@answers.com",
  },
  {
    color: "#da2aee",
    name: "Freeland Lilburne",
    avatar:
      "https://robohash.org/possimuslaudantiumcum.png?size=50x50&set=set1",
    university: "Yangzhou University",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    email: "flilburneh3@godaddy.com",
  },
  {
    color: "#4d1675",
    name: "Gamaliel Bedbury",
    avatar: "https://robohash.org/delenitiofficiisest.png?size=50x50&set=set1",
    university: "Kaluga State Pedagogical University",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.",
    email: "gbedburyh4@trellian.com",
  },
  {
    color: "#85654a",
    name: "Michel Phillipson",
    avatar: "https://robohash.org/idenimvel.png?size=50x50&set=set1",
    university: "Universidad Nacional de Cuyo",
    sentences:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    email: "mphillipsonh5@census.gov",
  },
  {
    color: "#4d9be9",
    name: "Lynnette Toulson",
    avatar: "https://robohash.org/quasiseddolor.png?size=50x50&set=set1",
    university: "Universidad de Sucre",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    email: "ltoulsonh6@google.com.br",
  },
  {
    color: "#efb80f",
    name: "Ronny Jeannequin",
    avatar: "https://robohash.org/sapientequisfuga.png?size=50x50&set=set1",
    university: "National American University, Sioux Falls",
    sentences: "Nullam porttitor lacus at turpis.",
    email: "rjeannequinh7@arstechnica.com",
  },
  {
    color: "#400d63",
    name: "Linda Willisch",
    avatar: "https://robohash.org/numquamsuscipitnemo.png?size=50x50&set=set1",
    university: "Fukuyama Heisei University",
    sentences: "Aliquam quis turpis eget elit sodales scelerisque.",
    email: "lwillischh8@apple.com",
  },
  {
    color: "#82f84c",
    name: "Brit Dimitriou",
    avatar: "https://robohash.org/seddelenitinon.png?size=50x50&set=set1",
    university: "Universidad José Antonio Páez",
    sentences:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    email: "bdimitriouh9@jugem.jp",
  },
  {
    color: "#73031b",
    name: "Natal Haxell",
    avatar: "https://robohash.org/etnihilperspiciatis.png?size=50x50&set=set1",
    university: "Thames Valley University",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    email: "nhaxellha@wikia.com",
  },
  {
    color: "#035ab8",
    name: "Natalee Gyves",
    avatar: "https://robohash.org/velinventorevel.png?size=50x50&set=set1",
    university: "Universität Hohenheim",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    email: "ngyveshb@cafepress.com",
  },
  {
    color: "#7dd7e4",
    name: "Esther Bowick",
    avatar: "https://robohash.org/doloromnisexpedita.png?size=50x50&set=set1",
    university: "University of Peshawar",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    email: "ebowickhc@dion.ne.jp",
  },
  {
    color: "#b9bad8",
    name: "Staford Whitrod",
    avatar: "https://robohash.org/quisquitotam.png?size=50x50&set=set1",
    university: "Curry College",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "swhitrodhd@tripadvisor.com",
  },
  {
    color: "#3abbb7",
    name: "Wandie Cousens",
    avatar: "https://robohash.org/quirationevoluptatum.png?size=50x50&set=set1",
    university: "St. Petersburg State University of Economics and Finance",
    sentences: "Cras in purus eu magna vulputate luctus.",
    email: "wcousenshe@ihg.com",
  },
  {
    color: "#939803",
    name: "Quintin Gwynn",
    avatar: "https://robohash.org/consequunturquialias.png?size=50x50&set=set1",
    university: "Université de Batna",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "qgwynnhf@sbwire.com",
  },
  {
    color: "#8e2a08",
    name: "Josee Gally",
    avatar: "https://robohash.org/etmolestiaeeligendi.png?size=50x50&set=set1",
    university: "Moscow State Industrial University",
    sentences:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    email: "jgallyhg@pbs.org",
  },
  {
    color: "#ab4095",
    name: "Ebonee Mazey",
    avatar: "https://robohash.org/possimusetoptio.png?size=50x50&set=set1",
    university: "Adeyemi College of Education",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "emazeyhh@themeforest.net",
  },
  {
    color: "#634f72",
    name: "Codi Dewicke",
    avatar: "https://robohash.org/oditcommodinobis.png?size=50x50&set=set1",
    university: "Universidad de Carabobo",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "cdewickehi@microsoft.com",
  },
  {
    color: "#268c02",
    name: "Jess Sichardt",
    avatar: "https://robohash.org/suscipitdoloret.png?size=50x50&set=set1",
    university: "Türkisch-Deutsche Universität",
    sentences: "Aliquam erat volutpat. In congue. Etiam justo.",
    email: "jsichardthj@ezinearticles.com",
  },
  {
    color: "#4d9e37",
    name: "Simon Shayes",
    avatar: "https://robohash.org/eaevenietvoluptas.png?size=50x50&set=set1",
    university: "Universidad Nacional del Centro del Perú",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    email: "sshayeshk@patch.com",
  },
  {
    color: "#7d003e",
    name: "Nola Dodding",
    avatar: "https://robohash.org/etprovidentquia.png?size=50x50&set=set1",
    university: "University of Zadar",
    sentences: "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    email: "ndoddinghl@netvibes.com",
  },
  {
    color: "#571bbb",
    name: "Kenn Rainard",
    avatar: "https://robohash.org/eaquasimollitia.png?size=50x50&set=set1",
    university: "Zimbabwe Open University",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    email: "krainardhm@narod.ru",
  },
  {
    color: "#ae0720",
    name: "Lucio Fiddian",
    avatar: "https://robohash.org/nonavoluptatem.png?size=50x50&set=set1",
    university: "Universidad de Chiclayo",
    sentences:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    email: "lfiddianhn@xrea.com",
  },
  {
    color: "#af21be",
    name: "Masha Stonner",
    avatar: "https://robohash.org/admollitianihil.png?size=50x50&set=set1",
    university: "Aomori Chuoh Gakuin University",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    email: "mstonnerho@lulu.com",
  },
  {
    color: "#ef177d",
    name: "Con Stubbington",
    avatar: "https://robohash.org/sequiipsumfugiat.png?size=50x50&set=set1",
    university: "University Vitez In Travnik",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    email: "cstubbingtonhp@examiner.com",
  },
  {
    color: "#626d02",
    name: "Karlotte Kennett",
    avatar: "https://robohash.org/repellatdolordolorum.png?size=50x50&set=set1",
    university: "Kongju National University of Education",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
    email: "kkennetthq@latimes.com",
  },
  {
    color: "#2afd35",
    name: "Bobinette Tripean",
    avatar: "https://robohash.org/quisuscipiteum.png?size=50x50&set=set1",
    university: "Private Fachhochschule Göttingen",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    email: "btripeanhr@bandcamp.com",
  },
  {
    color: "#2aaf0c",
    name: "Sax Bartels",
    avatar:
      "https://robohash.org/consecteturetmollitia.png?size=50x50&set=set1",
    university: "Miyazaki Medical College",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    email: "sbartelshs@topsy.com",
  },
  {
    color: "#3af04a",
    name: "Maje Finnemore",
    avatar: "https://robohash.org/utinaliquid.png?size=50x50&set=set1",
    university: "Nagoya University",
    sentences: "Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    email: "mfinnemoreht@typepad.com",
  },
  {
    color: "#128496",
    name: "Hermina Climo",
    avatar: "https://robohash.org/iustosedvelit.png?size=50x50&set=set1",
    university: "Atlanta College of Art",
    sentences:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    email: "hclimohu@yolasite.com",
  },
  {
    color: "#91337b",
    name: "Grantley Arminger",
    avatar: "https://robohash.org/voluptasnampossimus.png?size=50x50&set=set1",
    university: "Fukui University",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    email: "garmingerhv@thetimes.co.uk",
  },
  {
    color: "#8079fd",
    name: "Benjamin Bourcq",
    avatar:
      "https://robohash.org/rerumreiciendiscumque.png?size=50x50&set=set1",
    university: "Institut Commercial de Nancy",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    email: "bbourcqhw@com.com",
  },
  {
    color: "#bba070",
    name: "Lenette Sabbins",
    avatar: "https://robohash.org/odiobeataelaudantium.png?size=50x50&set=set1",
    university: "Bingham University",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    email: "lsabbinshx@biglobe.ne.jp",
  },
  {
    color: "#0c1af1",
    name: "Irita Bortolotti",
    avatar: "https://robohash.org/quoitaqueearum.png?size=50x50&set=set1",
    university: "First Global University to teaching Jainism",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    email: "ibortolottihy@mozilla.com",
  },
  {
    color: "#94271e",
    name: "Abramo Minichi",
    avatar:
      "https://robohash.org/adipiscifacereinventore.png?size=50x50&set=set1",
    university: "Mount Holyoke College",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    email: "aminichihz@a8.net",
  },
  {
    color: "#f62aea",
    name: "Yettie Kynson",
    avatar: "https://robohash.org/etcupiditateratione.png?size=50x50&set=set1",
    university: "Beijing Sport University",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    email: "ykynsoni0@posterous.com",
  },
  {
    color: "#248e3b",
    name: "Vladamir Denver",
    avatar: "https://robohash.org/omnisessenihil.png?size=50x50&set=set1",
    university: "Universidad de Castilla La Mancha",
    sentences: "Nullam varius. Nulla facilisi.",
    email: "vdenveri1@sfgate.com",
  },
  {
    color: "#04dfcb",
    name: "Lesley Drei",
    avatar: "https://robohash.org/placeateaqueid.png?size=50x50&set=set1",
    university: "Alaska Bible College",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "ldreii2@wikispaces.com",
  },
  {
    color: "#2b8e87",
    name: "Patricio Resun",
    avatar: "https://robohash.org/laboreassumendaquos.png?size=50x50&set=set1",
    university: "Instituto Tecnológico Metropolitano",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    email: "presuni3@google.pl",
  },
  {
    color: "#d7f3de",
    name: "Link Wheaton",
    avatar:
      "https://robohash.org/namdignissimosconsectetur.png?size=50x50&set=set1",
    university: "Florida Southern College",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    email: "lwheatoni4@deliciousdays.com",
  },
  {
    color: "#0e480e",
    name: "Parker Rapo",
    avatar:
      "https://robohash.org/doloremquiconsequatur.png?size=50x50&set=set1",
    university: "Niigata Sangyo University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    email: "prapoi5@canalblog.com",
  },
  {
    color: "#b1d4bb",
    name: "Cari Crosen",
    avatar: "https://robohash.org/nonsuntducimus.png?size=50x50&set=set1",
    university: "Universidad Tecnológica del Sur",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    email: "ccroseni6@pen.io",
  },
  {
    color: "#52a440",
    name: "Lil Muat",
    avatar:
      "https://robohash.org/temporibusquasisoluta.png?size=50x50&set=set1",
    university: "Universitas Methodist Indonesia",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "lmuati7@networkadvertising.org",
  },
  {
    color: "#96d510",
    name: "Sutton Veldens",
    avatar:
      "https://robohash.org/possimusassumendaullam.png?size=50x50&set=set1",
    university: "University of Indianapolis in Athens",
    sentences:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "sveldensi8@nydailynews.com",
  },
  {
    color: "#f2f9e2",
    name: "Isadora Brea",
    avatar:
      "https://robohash.org/enimcupiditateoccaecati.png?size=50x50&set=set1",
    university: "Kunsthochschule Berlin-Weissensee, Hochschule für Gestaltung ",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    email: "ibreai9@cdbaby.com",
  },
  {
    color: "#8f34f4",
    name: "Paul Proudman",
    avatar:
      "https://robohash.org/voluptateaccusamuseius.png?size=50x50&set=set1",
    university: "Universidade Católica de Goiás",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    email: "pproudmania@drupal.org",
  },
  {
    color: "#4422ec",
    name: "Aeriela Cucuzza",
    avatar: "https://robohash.org/quodquosaccusamus.png?size=50x50&set=set1",
    university: "Ivanovo State Academy of Medicine",
    sentences:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    email: "acucuzzaib@latimes.com",
  },
  {
    color: "#4e4ffe",
    name: "Serena Valek",
    avatar: "https://robohash.org/eumvoluptatumqui.png?size=50x50&set=set1",
    university: "Universiteit Doesburg (UNDO)",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    email: "svalekic@tripod.com",
  },
  {
    color: "#f0afbf",
    name: "Roderich Hartzogs",
    avatar:
      "https://robohash.org/voluptatemperferendisreprehenderit.png?size=50x50&set=set1",
    university: "Universidad Nacional Andrés Bello",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "rhartzogsid@mozilla.com",
  },
  {
    color: "#78e918",
    name: "Larry Mawd",
    avatar: "https://robohash.org/quiadoloresmolestias.png?size=50x50&set=set1",
    university: "Doshisha Women's College of Liberal Arts",
    sentences: "Morbi quis tortor id nulla ultrices aliquet.",
    email: "lmawdie@seesaa.net",
  },
  {
    color: "#3e7b23",
    name: "Nariko Enticott",
    avatar: "https://robohash.org/temporeveritatiset.png?size=50x50&set=set1",
    university: "Segi University College",
    sentences: "Aliquam erat volutpat. In congue. Etiam justo.",
    email: "nenticottif@ovh.net",
  },
  {
    color: "#4f2d85",
    name: "Merill Cancellieri",
    avatar: "https://robohash.org/maximeplaceatomnis.png?size=50x50&set=set1",
    university: "Higher School of Psychology",
    sentences:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    email: "mcancellieriig@sakura.ne.jp",
  },
  {
    color: "#ec29fd",
    name: "Sandi McGuinness",
    avatar: "https://robohash.org/dolorutvel.png?size=50x50&set=set1",
    university: "Al-Manar University",
    sentences: "Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    email: "smcguinnessih@usatoday.com",
  },
  {
    color: "#397aa3",
    name: "Lockwood Bessett",
    avatar: "https://robohash.org/voluptatemofficiaet.png?size=50x50&set=set1",
    university: "University of Lancaster",
    sentences:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    email: "lbessettii@sohu.com",
  },
  {
    color: "#e00d17",
    name: "Tadeo Carrick",
    avatar: "https://robohash.org/accusamusdoloread.png?size=50x50&set=set1",
    university: "University of the Visual & Performing Arts",
    sentences:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    email: "tcarrickij@behance.net",
  },
  {
    color: "#b89b02",
    name: "Charissa Comoletti",
    avatar:
      "https://robohash.org/corruptilaborumvoluptas.png?size=50x50&set=set1",
    university: "Maritime University in Szczecin",
    sentences:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    email: "ccomolettiik@patch.com",
  },
  {
    color: "#2399a4",
    name: "Tedmund Roglieri",
    avatar: "https://robohash.org/magnameumexpedita.png?size=50x50&set=set1",
    university: "Universidad Técnica del Norte",
    sentences:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    email: "troglieriil@icio.us",
  },
  {
    color: "#a328ca",
    name: "Lind McAlinion",
    avatar:
      "https://robohash.org/doloresexercitationemut.png?size=50x50&set=set1",
    university: "Universität Kaiserslautern",
    sentences:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "lmcalinionim@forbes.com",
  },
  {
    color: "#8bfd98",
    name: "Germaine Rabson",
    avatar: "https://robohash.org/quianisiporro.png?size=50x50&set=set1",
    university: "University of Wisconsin - Oshkosh",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    email: "grabsonin@virginia.edu",
  },
  {
    color: "#e3b682",
    name: "Hort Sheards",
    avatar: "https://robohash.org/ducimusquieius.png?size=50x50&set=set1",
    university: "Sabaragamuwa University of Sri Lanka",
    sentences:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "hsheardsio@yellowpages.com",
  },
  {
    color: "#8e98c8",
    name: "Debby Rastrick",
    avatar:
      "https://robohash.org/aperiamdoloresaccusantium.png?size=50x50&set=set1",
    university: "Islamic Azad University, Semnan",
    sentences:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    email: "drastrickip@businessinsider.com",
  },
  {
    color: "#261eb1",
    name: "Gearalt Motten",
    avatar: "https://robohash.org/quidoloresipsam.png?size=50x50&set=set1",
    university: "Odessa National Polytechnic University",
    sentences:
      "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    email: "gmotteniq@google.ca",
  },
  {
    color: "#a30825",
    name: "Paulita Boutcher",
    avatar:
      "https://robohash.org/occaecativoluptatemfacilis.png?size=50x50&set=set1",
    university: "Feati University",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    email: "pboutcherir@ox.ac.uk",
  },
  {
    color: "#9ca94f",
    name: "Fred Loxston",
    avatar:
      "https://robohash.org/eligendinihilconsequuntur.png?size=50x50&set=set1",
    university: "University of Nebraska (System)",
    sentences:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    email: "floxstonis@e-recht24.de",
  },
  {
    color: "#6b46a8",
    name: "Leontine Edlington",
    avatar: "https://robohash.org/voluptasquiapossimus.png?size=50x50&set=set1",
    university: "Hiroshima International University",
    sentences: "Duis at velit eu est congue elementum.",
    email: "ledlingtonit@wufoo.com",
  },
  {
    color: "#59e5b0",
    name: "Marilin Fulmen",
    avatar: "https://robohash.org/iurequaerathic.png?size=50x50&set=set1",
    university: "Kigali Institute of Education",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    email: "mfulmeniu@fc2.com",
  },
  {
    color: "#3ec7e6",
    name: "Ailene Vedyashkin",
    avatar:
      "https://robohash.org/voluptatesquiaquisquam.png?size=50x50&set=set1",
    university: "King Abdul Aziz University",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "avedyashkiniv@oakley.com",
  },
  {
    color: "#d863be",
    name: "Angy Kerslake",
    avatar: "https://robohash.org/rerumetnulla.png?size=50x50&set=set1",
    university: "Al Mamon University College",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    email: "akerslakeiw@imageshack.us",
  },
  {
    color: "#91deac",
    name: "Vikki Fonzone",
    avatar:
      "https://robohash.org/repellendusquosuscipit.png?size=50x50&set=set1",
    university: "Universidad Especializada de Las Americas",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    email: "vfonzoneix@moonfruit.com",
  },
  {
    color: "#5e06fa",
    name: "Dud Coushe",
    avatar: "https://robohash.org/impeditcumdoloremque.png?size=50x50&set=set1",
    university: "Ahmadu Bello University",
    sentences:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    email: "dcousheiy@cloudflare.com",
  },
  {
    color: "#a3a41c",
    name: "Conroy Yannikov",
    avatar: "https://robohash.org/dolornatuseum.png?size=50x50&set=set1",
    university: "Academy of Art College",
    sentences:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    email: "cyannikoviz@so-net.ne.jp",
  },
  {
    color: "#085e87",
    name: "Pascal Tune",
    avatar: "https://robohash.org/noneosmodi.png?size=50x50&set=set1",
    university: "Curry College",
    sentences:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "ptunej0@about.com",
  },
  {
    color: "#8d85e2",
    name: "Ronalda Baniard",
    avatar: "https://robohash.org/voluptatemhicat.png?size=50x50&set=set1",
    university: "Fachhochschulstudiengänge Krems IMC",
    sentences:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    email: "rbaniardj1@delicious.com",
  },
  {
    color: "#9643e3",
    name: "Yoshiko Chung",
    avatar: "https://robohash.org/abetrepellendus.png?size=50x50&set=set1",
    university: "Ecole Nationale des Travaux Publics de l'Etat",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    email: "ychungj2@amazon.com",
  },
  {
    color: "#af4789",
    name: "Jeddy Danskine",
    avatar: "https://robohash.org/errorminimaet.png?size=50x50&set=set1",
    university: "Build Bright University",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    email: "jdanskinej3@samsung.com",
  },
  {
    color: "#3b86ec",
    name: "Chickie Caps",
    avatar:
      "https://robohash.org/inciduntbeataeoccaecati.png?size=50x50&set=set1",
    university: "St. Francis Xavier University",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    email: "ccapsj4@un.org",
  },
  {
    color: "#683ea2",
    name: "Yolane Manz",
    avatar: "https://robohash.org/veritatissitsit.png?size=50x50&set=set1",
    university: "Hiroshima Jogakuin University",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    email: "ymanzj5@ow.ly",
  },
  {
    color: "#2f7250",
    name: "Kirsti Lauritzen",
    avatar: "https://robohash.org/etexplicabodolores.png?size=50x50&set=set1",
    university: "Universitas Cenderawasih",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "klauritzenj6@fema.gov",
  },
  {
    color: "#3a49e3",
    name: "Morten Wadly",
    avatar: "https://robohash.org/etsuntmollitia.png?size=50x50&set=set1",
    university: "Pennsylvania State University - Abington",
    sentences:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    email: "mwadlyj7@homestead.com",
  },
  {
    color: "#51c77c",
    name: "Ryon Oakenfield",
    avatar: "https://robohash.org/nonmolestiasdolores.png?size=50x50&set=set1",
    university: "Wirtschaftsuniversität Wien",
    sentences: "Praesent blandit.",
    email: "roakenfieldj8@pcworld.com",
  },
  {
    color: "#5fdb3d",
    name: "Dav Saich",
    avatar: "https://robohash.org/laboreomniset.png?size=50x50&set=set1",
    university: "University of Health Sciences Andhra Pradesh",
    sentences:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "dsaichj9@usnews.com",
  },
  {
    color: "#2e2cc1",
    name: "Gustavus Isacke",
    avatar: "https://robohash.org/autsedamet.png?size=50x50&set=set1",
    university: "Colorado College",
    sentences:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    email: "gisackeja@discuz.net",
  },
  {
    color: "#d586a5",
    name: "Oralie McGarvey",
    avatar: "https://robohash.org/sintsedratione.png?size=50x50&set=set1",
    university: "Sterlitamak State Pedagogical Institute",
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    email: "omcgarveyjb@state.gov",
  },
  {
    color: "#b83edb",
    name: "Rhetta Espinal",
    avatar:
      "https://robohash.org/magniullamrepudiandae.png?size=50x50&set=set1",
    university: "Universidad Isaac Newton",
    sentences:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    email: "respinaljc@freewebs.com",
  },
  {
    color: "#c0a648",
    name: "Caryn Vasenkov",
    avatar: "https://robohash.org/dictacorruptitempora.png?size=50x50&set=set1",
    university: "Lorestan University of Medical Sciences",
    sentences:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    email: "cvasenkovjd@qq.com",
  },
  {
    color: "#ab29be",
    name: "Vale Giraux",
    avatar: "https://robohash.org/eaestcommodi.png?size=50x50&set=set1",
    university: "Halic University",
    sentences:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    email: "vgirauxje@examiner.com",
  },
  {
    color: "#e66b7a",
    name: "Vinson MacKintosh",
    avatar: "https://robohash.org/autpraesentiumquod.png?size=50x50&set=set1",
    university: "Semmelweis University of Medical Sciences",
    sentences:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "vmackintoshjf@woothemes.com",
  },
  {
    color: "#3037c9",
    name: "Gil Fake",
    avatar: "https://robohash.org/etquiaassumenda.png?size=50x50&set=set1",
    university: "University of Sannio",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    email: "gfakejg@rambler.ru",
  },
  {
    color: "#b4434d",
    name: "Jody Glyssanne",
    avatar: "https://robohash.org/rerumfugiatillum.png?size=50x50&set=set1",
    university: "Université Paris Sud (Paris XI)",
    sentences: "Fusce consequat.",
    email: "jglyssannejh@noaa.gov",
  },
  {
    color: "#4dc605",
    name: "Colby Kennaird",
    avatar: "https://robohash.org/quaeanimihic.png?size=50x50&set=set1",
    university: "South Asian Institute of Technology And Medicine (SAITM) ",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    email: "ckennairdji@nature.com",
  },
  {
    color: "#ddef03",
    name: "Cchaddie McAmish",
    avatar:
      "https://robohash.org/magnamconsequaturlaudantium.png?size=50x50&set=set1",
    university: "Caribbean University",
    sentences: "Suspendisse potenti. Nullam porttitor lacus at turpis.",
    email: "cmcamishjj@wikipedia.org",
  },
  {
    color: "#b06aa6",
    name: "Juline McCabe",
    avatar:
      "https://robohash.org/explicabopossimusratione.png?size=50x50&set=set1",
    university: "The Superior College ",
    sentences:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    email: "jmccabejk@ocn.ne.jp",
  },
  {
    color: "#7a6279",
    name: "Edie Pittford",
    avatar: "https://robohash.org/accusamusdolordicta.png?size=50x50&set=set1",
    university: "United States International University",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    email: "epittfordjl@state.gov",
  },
  {
    color: "#84681e",
    name: "Kincaid Joncic",
    avatar: "https://robohash.org/itaqueautofficia.png?size=50x50&set=set1",
    university: "University of the Italian-speaking Part of Switzerland",
    sentences:
      "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    email: "kjoncicjm@hibu.com",
  },
  {
    color: "#f6f250",
    name: "Harmonie Attril",
    avatar: "https://robohash.org/laborumetsimilique.png?size=50x50&set=set1",
    university: "Universidad del Atlántico",
    sentences:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    email: "hattriljn@prweb.com",
  },
  {
    color: "#00325d",
    name: "Maryann Crystal",
    avatar: "https://robohash.org/inoditdelectus.png?size=50x50&set=set1",
    university: "Siebold University of Nagasaki",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    email: "mcrystaljo@deliciousdays.com",
  },
  {
    color: "#ba1e63",
    name: "Carmencita Gunda",
    avatar: "https://robohash.org/rerumvelitautem.png?size=50x50&set=set1",
    university: "Armenian State University of Economics",
    sentences:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "cgundajp@slate.com",
  },
  {
    color: "#da0fb6",
    name: "Adham Anmore",
    avatar:
      "https://robohash.org/velitperferendisnihil.png?size=50x50&set=set1",
    university: "Shahrood University of Medical Sciences",
    sentences: "Mauris sit amet eros.",
    email: "aanmorejq@posterous.com",
  },
  {
    color: "#70c45f",
    name: "Sandy Lyver",
    avatar: "https://robohash.org/utvoluptatumminus.png?size=50x50&set=set1",
    university: "Tafila Technical University ",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    email: "slyverjr@tmall.com",
  },
  {
    color: "#8f501b",
    name: "Marja Blewis",
    avatar: "https://robohash.org/illumveroet.png?size=50x50&set=set1",
    university: "Swarthmore College",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    email: "mblewisjs@nsw.gov.au",
  },
  {
    color: "#16c5d0",
    name: "Sashenka Crisall",
    avatar: "https://robohash.org/utvelvoluptas.png?size=50x50&set=set1",
    university: "All Nations University College",
    sentences:
      "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    email: "scrisalljt@psu.edu",
  },
  {
    color: "#c58a6a",
    name: "Norrie Panchen",
    avatar:
      "https://robohash.org/similiquevoluptatemnostrum.png?size=50x50&set=set1",
    university: "Sakarya University",
    sentences:
      "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    email: "npanchenju@fema.gov",
  },
  {
    color: "#745bdb",
    name: "Tadio O'Lochan",
    avatar: "https://robohash.org/sintquoitaque.png?size=50x50&set=set1",
    university: "Universidad Nacional Abierta y a Distancia",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    email: "tolochanjv@google.com",
  },
  {
    color: "#5e4fba",
    name: "Brigitta Durtnal",
    avatar: "https://robohash.org/aperiamoccaecatised.png?size=50x50&set=set1",
    university: "Wellspring University",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "bdurtnaljw@java.com",
  },
  {
    color: "#dea412",
    name: "Kessiah Gothard",
    avatar:
      "https://robohash.org/perspiciatisvoluptatesvel.png?size=50x50&set=set1",
    university: "Technological Education Institute of Kozani",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "kgothardjx@pagesperso-orange.fr",
  },
  {
    color: "#3d038a",
    name: "Gayleen Ruske",
    avatar: "https://robohash.org/quiaomnisest.png?size=50x50&set=set1",
    university: "University of Basel",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
    email: "gruskejy@army.mil",
  },
  {
    color: "#9e1df5",
    name: "Stanislaw Yorke",
    avatar: "https://robohash.org/autestiure.png?size=50x50&set=set1",
    university: "The American University in London",
    sentences: "Vestibulum rutrum rutrum neque.",
    email: "syorkejz@blog.com",
  },
  {
    color: "#7bd15e",
    name: "Julian O'Sullivan",
    avatar:
      "https://robohash.org/expeditainventoresunt.png?size=50x50&set=set1",
    university: "Universidad Empresarial Mateo Kuljis",
    sentences:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    email: "josullivank0@pagesperso-orange.fr",
  },
  {
    color: "#39d42a",
    name: "Charin Wedlake",
    avatar: "https://robohash.org/utcorporiset.png?size=50x50&set=set1",
    university: "Universidad Católica Andres Bello",
    sentences:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    email: "cwedlakek1@jimdo.com",
  },
  {
    color: "#5442bd",
    name: "Jarred Corday",
    avatar: "https://robohash.org/idminusaliquam.png?size=50x50&set=set1",
    university: "Sage Graduate School",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    email: "jcordayk2@de.vu",
  },
  {
    color: "#7d104b",
    name: "Gunner Scholefield",
    avatar: "https://robohash.org/sitplaceatvelit.png?size=50x50&set=set1",
    university: "Universidad Amazonica de Pando",
    sentences:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "gscholefieldk3@gravatar.com",
  },
  {
    color: "#c777bb",
    name: "Stesha Mattiacci",
    avatar:
      "https://robohash.org/delectusipsumpariatur.png?size=50x50&set=set1",
    university: "International Centre for Isclamic Science",
    sentences:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "smattiaccik4@reference.com",
  },
  {
    color: "#bebabc",
    name: "Marje Linnett",
    avatar: "https://robohash.org/innonmodi.png?size=50x50&set=set1",
    university: "Moscow State University of Forestry Engineering",
    sentences: "In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    email: "mlinnettk5@people.com.cn",
  },
  {
    color: "#a7efbe",
    name: "Harwell Mainstone",
    avatar: "https://robohash.org/minimaquaequi.png?size=50x50&set=set1",
    university: "Indian Institute of Management, Tiruchirappalli",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "hmainstonek6@taobao.com",
  },
  {
    color: "#b2eb32",
    name: "Ange Ateridge",
    avatar: "https://robohash.org/consequatureiusiure.png?size=50x50&set=set1",
    university: "Aalborg University",
    sentences:
      "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    email: "aateridgek7@msn.com",
  },
  {
    color: "#c36dd6",
    name: "Natty Vowell",
    avatar: "https://robohash.org/atofficianihil.png?size=50x50&set=set1",
    university: "Urmia University",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    email: "nvowellk8@networksolutions.com",
  },
  {
    color: "#428df8",
    name: "Donovan Dumbreck",
    avatar: "https://robohash.org/eiussuntid.png?size=50x50&set=set1",
    university: "Brescia College",
    sentences:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    email: "ddumbreckk9@nyu.edu",
  },
  {
    color: "#0d27da",
    name: "Spence Wardroper",
    avatar: "https://robohash.org/ullamautemexcepturi.png?size=50x50&set=set1",
    university: "Fachhochschule Dortmund",
    sentences: "Nulla ut erat id mauris vulputate elementum.",
    email: "swardroperka@netlog.com",
  },
  {
    color: "#8f9cf3",
    name: "Giovanna Murton",
    avatar: "https://robohash.org/molestiaenihilvero.png?size=50x50&set=set1",
    university: "Widener University",
    sentences:
      "Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "gmurtonkb@exblog.jp",
  },
  {
    color: "#eafa80",
    name: "Lyndell Pavlenko",
    avatar:
      "https://robohash.org/deseruntaccusamusipsa.png?size=50x50&set=set1",
    university: "Sumy National Agrarian University",
    sentences:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    email: "lpavlenkokc@github.com",
  },
  {
    color: "#3cf8b4",
    name: "Libbi Hymers",
    avatar: "https://robohash.org/eiuscommodiaut.png?size=50x50&set=set1",
    university: "Universidad de Holguín",
    sentences:
      "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    email: "lhymerskd@multiply.com",
  },
  {
    color: "#2e7c9d",
    name: "Josi Perkins",
    avatar: "https://robohash.org/sintvelid.png?size=50x50&set=set1",
    university: "California University of Pennsylvania",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "jperkinske@dailymail.co.uk",
  },
  {
    color: "#417559",
    name: "Galven MacNeice",
    avatar: "https://robohash.org/quoaliquamfuga.png?size=50x50&set=set1",
    university: "University of Salerno",
    sentences: "Vivamus vestibulum sagittis sapien.",
    email: "gmacneicekf@icio.us",
  },
  {
    color: "#fc819f",
    name: "Jimmie Malinowski",
    avatar: "https://robohash.org/etquiaqui.png?size=50x50&set=set1",
    university: "Epoka University",
    sentences:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    email: "jmalinowskikg@springer.com",
  },
  {
    color: "#e249d5",
    name: "Artemus Rickcord",
    avatar: "https://robohash.org/perferendistotameum.png?size=50x50&set=set1",
    university: "University of Missouri - Columbia",
    sentences:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
    email: "arickcordkh@netlog.com",
  },
  {
    color: "#b14934",
    name: "Suzie McCarney",
    avatar: "https://robohash.org/errorautfacilis.png?size=50x50&set=set1",
    university: "Popakademie Baden-Württemberg",
    sentences: "Nulla tempus.",
    email: "smccarneyki@friendfeed.com",
  },
  {
    color: "#d6ac2d",
    name: "Patrizius Pollins",
    avatar: "https://robohash.org/dolorliberonon.png?size=50x50&set=set1",
    university: "Musashi Institute of Technology",
    sentences: "Cras non velit nec nisi vulputate nonummy.",
    email: "ppollinskj@toplist.cz",
  },
  {
    color: "#589d59",
    name: "Mona Craxford",
    avatar: "https://robohash.org/atquequidemveniam.png?size=50x50&set=set1",
    university: "University of Modena",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    email: "mcraxfordkk@nationalgeographic.com",
  },
  {
    color: "#b2a904",
    name: "Yoshi Holhouse",
    avatar: "https://robohash.org/pariaturaliquidaut.png?size=50x50&set=set1",
    university: "Université Abdelmalek Essadi",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    email: "yholhousekl@nytimes.com",
  },
  {
    color: "#ccf787",
    name: "Merridie Jarmain",
    avatar: "https://robohash.org/quoutnihil.png?size=50x50&set=set1",
    university: "Lupane State University",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    email: "mjarmainkm@51.la",
  },
  {
    color: "#259ba5",
    name: "Cynde Beacroft",
    avatar: "https://robohash.org/velitetimpedit.png?size=50x50&set=set1",
    university: "International Hellenic University",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    email: "cbeacroftkn@furl.net",
  },
  {
    color: "#075659",
    name: "Blithe Robet",
    avatar: "https://robohash.org/eaerrordolorem.png?size=50x50&set=set1",
    university: "Zetech College",
    sentences:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    email: "brobetko@desdev.cn",
  },
  {
    color: "#018332",
    name: "Jenilee Versey",
    avatar: "https://robohash.org/similiquelaborenon.png?size=50x50&set=set1",
    university: "Toyo University",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "jverseykp@forbes.com",
  },
  {
    color: "#7cdeea",
    name: "Ludvig Bazoche",
    avatar: "https://robohash.org/autrepellatet.png?size=50x50&set=set1",
    university: "Heritage College",
    sentences:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    email: "lbazochekq@instagram.com",
  },
  {
    color: "#e1efd2",
    name: "Ferrel Loxton",
    avatar:
      "https://robohash.org/perferendismolestiaeab.png?size=50x50&set=set1",
    university: "Pontifcia Universitas Lateranensis",
    sentences:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    email: "floxtonkr@moonfruit.com",
  },
  {
    color: "#0b6e29",
    name: "Shaina Stigers",
    avatar: "https://robohash.org/asperioressuntrerum.png?size=50x50&set=set1",
    university: "Saitama Medical School",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "sstigersks@ovh.net",
  },
  {
    color: "#f15d02",
    name: "Franny Denacamp",
    avatar: "https://robohash.org/quasiaspernaturesse.png?size=50x50&set=set1",
    university:
      "Budapest University of Economic Sciences and Public Administration",
    sentences:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "fdenacampkt@netscape.com",
  },
  {
    color: "#9d5f01",
    name: "Wake Glentz",
    avatar: "https://robohash.org/velitetdeserunt.png?size=50x50&set=set1",
    university: "California College San Diego",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    email: "wglentzku@scribd.com",
  },
  {
    color: "#210d66",
    name: "Leilah Coombe",
    avatar: "https://robohash.org/eosvoluptasquam.png?size=50x50&set=set1",
    university: "Mahatma Gandhi Kashi Vidyapith ",
    sentences: "Vivamus vestibulum sagittis sapien.",
    email: "lcoombekv@zdnet.com",
  },
  {
    color: "#fd1d80",
    name: "Northrop Palomba",
    avatar: "https://robohash.org/ametvoluptatemeos.png?size=50x50&set=set1",
    university: "San Beda College",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    email: "npalombakw@biglobe.ne.jp",
  },
  {
    color: "#00eac1",
    name: "Kassey Gaiger",
    avatar:
      "https://robohash.org/asperioresquaeratblanditiis.png?size=50x50&set=set1",
    university: "Kyushu Institute of Design",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    email: "kgaigerkx@ucsd.edu",
  },
  {
    color: "#a86dae",
    name: "Burg Lages",
    avatar: "https://robohash.org/rerummolestiaequi.png?size=50x50&set=set1",
    university: "Japan Advanced Institute of Science and Technology",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    email: "blagesky@hatena.ne.jp",
  },
  {
    color: "#661938",
    name: "Flin Spraggs",
    avatar: "https://robohash.org/velvoluptatererum.png?size=50x50&set=set1",
    university: "Moscow State Industrial University",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    email: "fspraggskz@github.io",
  },
  {
    color: "#2dc2bc",
    name: "Costa Skace",
    avatar: "https://robohash.org/quoiurenam.png?size=50x50&set=set1",
    university: "Bryn Athyn College of the New Church",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    email: "cskacel0@ameblo.jp",
  },
  {
    color: "#6e2c0b",
    name: "Louisette Costar",
    avatar: "https://robohash.org/utdoloresinventore.png?size=50x50&set=set1",
    university: "Oakland City University",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    email: "lcostarl1@arizona.edu",
  },
  {
    color: "#fa80c0",
    name: "Indira Goodlett",
    avatar: "https://robohash.org/eumnonoptio.png?size=50x50&set=set1",
    university: "Muadzam Shah Polytechnic",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    email: "igoodlettl2@yahoo.com",
  },
  {
    color: "#e304ff",
    name: "Dante Abatelli",
    avatar: "https://robohash.org/utsedlaudantium.png?size=50x50&set=set1",
    university: "Hawler Medical University",
    sentences:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    email: "dabatellil3@fda.gov",
  },
  {
    color: "#a125bc",
    name: "Any Riggott",
    avatar: "https://robohash.org/nullarerumomnis.png?size=50x50&set=set1",
    university: "Kyushu University",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    email: "ariggottl4@psu.edu",
  },
  {
    color: "#19d13f",
    name: "Lorri Kleinstern",
    avatar:
      "https://robohash.org/commodivoluptatemdeleniti.png?size=50x50&set=set1",
    university: "Karakoram International University",
    sentences:
      "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    email: "lkleinsternl5@barnesandnoble.com",
  },
  {
    color: "#397ece",
    name: "Pietro Rignold",
    avatar: "https://robohash.org/debitisquisquamnihil.png?size=50x50&set=set1",
    university: "Kunitachi College of Music",
    sentences: "Aenean sit amet justo.",
    email: "prignoldl6@fastcompany.com",
  },
  {
    color: "#3694ef",
    name: "Guy Sotheby",
    avatar: "https://robohash.org/oditquiaeos.png?size=50x50&set=set1",
    university: "University of Botswana",
    sentences:
      "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
    email: "gsothebyl7@omniture.com",
  },
  {
    color: "#b43b7c",
    name: "Mord Novichenko",
    avatar: "https://robohash.org/quidemeumsoluta.png?size=50x50&set=set1",
    university: "University of Petroleum (East China)",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "mnovichenkol8@baidu.com",
  },
  {
    color: "#22e4e7",
    name: "Ingelbert Harrie",
    avatar: "https://robohash.org/quisimpeditlabore.png?size=50x50&set=set1",
    university: "DeVry Institute of Technology, Decatur",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "iharriel9@about.com",
  },
  {
    color: "#4d3807",
    name: "Marylynne Cornewell",
    avatar:
      "https://robohash.org/distinctioexercitationemquae.png?size=50x50&set=set1",
    university: "Korea National University of Physical Education",
    sentences: "Vestibulum rutrum rutrum neque.",
    email: "mcornewellla@bluehost.com",
  },
  {
    color: "#6e0242",
    name: "Shawnee Lapidus",
    avatar: "https://robohash.org/recusandaeetcumque.png?size=50x50&set=set1",
    university: "Western Galilee College",
    sentences:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    email: "slapiduslb@unc.edu",
  },
  {
    color: "#3a4800",
    name: "Chaddie Mossom",
    avatar: "https://robohash.org/iuresaepequod.png?size=50x50&set=set1",
    university: "Liverpool John Moores University",
    sentences:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    email: "cmossomlc@delicious.com",
  },
  {
    color: "#d67919",
    name: "Luigi Kasman",
    avatar: "https://robohash.org/delenitiminimaet.png?size=50x50&set=set1",
    university: "Altai State University",
    sentences:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    email: "lkasmanld@nba.com",
  },
  {
    color: "#fb8900",
    name: "Jessey Ianittello",
    avatar: "https://robohash.org/voluptatumquisid.png?size=50x50&set=set1",
    university: "Vali-e-Asr University",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    email: "jianittellole@goodreads.com",
  },
  {
    color: "#527ebc",
    name: "Arline Burnsell",
    avatar: "https://robohash.org/etsuntquia.png?size=50x50&set=set1",
    university: "Panjab University",
    sentences: "Nullam varius.",
    email: "aburnselllf@ameblo.jp",
  },
  {
    color: "#55ae1d",
    name: "Aurelie Stonestreet",
    avatar: "https://robohash.org/namipsumnisi.png?size=50x50&set=set1",
    university: "Tianjin Medical University",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    email: "astonestreetlg@newsvine.com",
  },
  {
    color: "#ded5d3",
    name: "Maryellen Balsellie",
    avatar: "https://robohash.org/sedrerumut.png?size=50x50&set=set1",
    university: "Instituto Politécnico de Tomar",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    email: "mbalsellielh@nytimes.com",
  },
  {
    color: "#ceb775",
    name: "Zebedee McGerraghty",
    avatar: "https://robohash.org/officiisnontempora.png?size=50x50&set=set1",
    university: "Nalanda Open University",
    sentences:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    email: "zmcgerraghtyli@blogger.com",
  },
  {
    color: "#5eb2de",
    name: "Albrecht Jenks",
    avatar: "https://robohash.org/etcumqueodio.png?size=50x50&set=set1",
    university: "Guilford College",
    sentences:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    email: "ajenkslj@diigo.com",
  },
  {
    color: "#a6c464",
    name: "Zachary Weatherburn",
    avatar: "https://robohash.org/dolorumnobissapiente.png?size=50x50&set=set1",
    university: "International College",
    sentences:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    email: "zweatherburnlk@nydailynews.com",
  },
  {
    color: "#b104dd",
    name: "Loni Bondar",
    avatar:
      "https://robohash.org/suscipitconsecteturvoluptas.png?size=50x50&set=set1",
    university: "University of Applied Sciences Chur",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    email: "lbondarll@springer.com",
  },
  {
    color: "#36bfef",
    name: "Patton O'Fearguise",
    avatar:
      "https://robohash.org/porroaliquidvoluptatem.png?size=50x50&set=set1",
    university: "Herat University",
    sentences:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    email: "pofearguiselm@icio.us",
  },
  {
    color: "#3b52ac",
    name: "Bryon Leal",
    avatar: "https://robohash.org/arepudiandaedolor.png?size=50x50&set=set1",
    university: "Cornish College of the Arts",
    sentences:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    email: "blealln@cpanel.net",
  },
  {
    color: "#f7a680",
    name: "Salim Sjostrom",
    avatar: "https://robohash.org/quamestcum.png?size=50x50&set=set1",
    university: "Universidad Nacional de Lanus",
    sentences:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    email: "ssjostromlo@google.com",
  },
  {
    color: "#74a532",
    name: "Ora Wittey",
    avatar: "https://robohash.org/autmolestiasquis.png?size=50x50&set=set1",
    university: "Nordic School of Public Health",
    sentences: "Etiam vel augue.",
    email: "owitteylp@youku.com",
  },
  {
    color: "#bafc61",
    name: "Corrine Myatt",
    avatar: "https://robohash.org/etquaeeos.png?size=50x50&set=set1",
    university: "Aga Khan University",
    sentences:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    email: "cmyattlq@ebay.com",
  },
  {
    color: "#f25053",
    name: "Clare Kondratowicz",
    avatar: "https://robohash.org/eatenetursoluta.png?size=50x50&set=set1",
    university: "Stavropol State University",
    sentences:
      "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    email: "ckondratowiczlr@hexun.com",
  },
  {
    color: "#373b66",
    name: "Pascale Bamlet",
    avatar:
      "https://robohash.org/exercitationemvelitperferendis.png?size=50x50&set=set1",
    university: "Reinhardt College",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    email: "pbamletls@youtube.com",
  },
  {
    color: "#35b5d7",
    name: "Dulcea MacGill",
    avatar: "https://robohash.org/etestatque.png?size=50x50&set=set1",
    university: "Damanhour University",
    sentences: "Integer ac leo.",
    email: "dmacgilllt@icq.com",
  },
  {
    color: "#519053",
    name: "Dorisa Manville",
    avatar:
      "https://robohash.org/voluptatesistepariatur.png?size=50x50&set=set1",
    university: "Royal University of Fine Arts",
    sentences:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    email: "dmanvillelu@i2i.jp",
  },
  {
    color: "#824675",
    name: "Pamelina Load",
    avatar: "https://robohash.org/utfacereveniam.png?size=50x50&set=set1",
    university: "Kyushu Institute of Technology",
    sentences:
      "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    email: "ploadlv@mysql.com",
  },
  {
    color: "#843bc9",
    name: "Ab Brushneen",
    avatar:
      "https://robohash.org/voluptasexercitationemautem.png?size=50x50&set=set1",
    university: "Universidad Carlos III de Madrid",
    sentences:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    email: "abrushneenlw@ted.com",
  },
  {
    color: "#3a8d59",
    name: "Hube Hand",
    avatar:
      "https://robohash.org/abblanditiisconsequatur.png?size=50x50&set=set1",
    university:
      "Anhui Technical College of Water Resources and Hydroelectric Power",
    sentences:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    email: "hhandlx@naver.com",
  },
  {
    color: "#dd5e65",
    name: "Thomasina Renak",
    avatar:
      "https://robohash.org/delectuscupiditaterepellat.png?size=50x50&set=set1",
    university: "Florida Metropolitan University, Tampa College",
    sentences: "Morbi non lectus.",
    email: "trenakly@businesswire.com",
  },
  {
    color: "#cbad1f",
    name: "Kacie Pomroy",
    avatar: "https://robohash.org/autexnon.png?size=50x50&set=set1",
    university: "Universidade de Guarulhos",
    sentences: "Donec posuere metus vitae ipsum. Aliquam non mauris.",
    email: "kpomroylz@businesswire.com",
  },
  {
    color: "#93e02f",
    name: "Zackariah Wrassell",
    avatar: "https://robohash.org/quiamollitiavitae.png?size=50x50&set=set1",
    university: "Islamic Azad University, Yazd",
    sentences:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    email: "zwrassellm0@soup.io",
  },
  {
    color: "#3b8f7b",
    name: "Gabby Wasielewicz",
    avatar:
      "https://robohash.org/veritatisquivoluptatem.png?size=50x50&set=set1",
    university: "DeVry Institute of Technology, Kansas City",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    email: "gwasielewiczm1@themeforest.net",
  },
  {
    color: "#c202c9",
    name: "Brice Sumbler",
    avatar:
      "https://robohash.org/estexercitationemquam.png?size=50x50&set=set1",
    university: "Universitas Jember",
    sentences:
      "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    email: "bsumblerm2@homestead.com",
  },
  {
    color: "#846e16",
    name: "Nathanael Tiley",
    avatar: "https://robohash.org/quasanimiaut.png?size=50x50&set=set1",
    university: "Dordt College",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    email: "ntileym3@geocities.jp",
  },
  {
    color: "#3628ef",
    name: "Frank Clausen",
    avatar: "https://robohash.org/excepturiautunde.png?size=50x50&set=set1",
    university: "Al-Baath University",
    sentences:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    email: "fclausenm4@wunderground.com",
  },
  {
    color: "#8742f5",
    name: "Ferdinande Pollendine",
    avatar:
      "https://robohash.org/excepturiquaeratmolestias.png?size=50x50&set=set1",
    university: "Dnepropetrovsk National University of Railway Transport",
    sentences:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    email: "fpollendinem5@bing.com",
  },
  {
    color: "#d22171",
    name: "Byron Wardingly",
    avatar: "https://robohash.org/ipsadolorsunt.png?size=50x50&set=set1",
    university: "Converse College",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    email: "bwardinglym6@usgs.gov",
  },
  {
    color: "#a26131",
    name: "Sidoney Lanyon",
    avatar: "https://robohash.org/officiissitet.png?size=50x50&set=set1",
    university: "Kaplan University",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    email: "slanyonm7@lulu.com",
  },
  {
    color: "#ebe5e2",
    name: "Benedetto Lapham",
    avatar:
      "https://robohash.org/magnammagniasperiores.png?size=50x50&set=set1",
    university:
      "Hochschule Anhalt (FH), Hochschule für angewandte Wissenschaften",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    email: "blaphamm8@gmpg.org",
  },
  {
    color: "#8911a6",
    name: "Trefor Herion",
    avatar: "https://robohash.org/omnisanimisit.png?size=50x50&set=set1",
    university: "University of Mumbai",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "therionm9@about.me",
  },
  {
    color: "#6e2ea5",
    name: "Joleen Cyphus",
    avatar: "https://robohash.org/utdolorumminus.png?size=50x50&set=set1",
    university: "Debre Markos University",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    email: "jcyphusma@pcworld.com",
  },
  {
    color: "#609812",
    name: "Amil Maskelyne",
    avatar:
      "https://robohash.org/dolorumlaborevoluptates.png?size=50x50&set=set1",
    university: "Patna University",
    sentences: "Vivamus tortor. Duis mattis egestas metus.",
    email: "amaskelynemb@ehow.com",
  },
  {
    color: "#9fdbeb",
    name: "Maximilien Grzeskowski",
    avatar: "https://robohash.org/quamquitenetur.png?size=50x50&set=set1",
    university: "Union University",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    email: "mgrzeskowskimc@blogger.com",
  },
  {
    color: "#5796ac",
    name: "Valera Nolte",
    avatar: "https://robohash.org/doloreullamlaborum.png?size=50x50&set=set1",
    university: "Faisalabad Institute of Textile and Fashion Design",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    email: "vnoltemd@technorati.com",
  },
  {
    color: "#b03995",
    name: "Purcell Tadman",
    avatar: "https://robohash.org/nihiltemporacorporis.png?size=50x50&set=set1",
    university: "South Dakota School of Mines and Technology",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    email: "ptadmanme@java.com",
  },
  {
    color: "#13158c",
    name: "Ev De Benedetti",
    avatar: "https://robohash.org/nemodoloremqueodio.png?size=50x50&set=set1",
    university: "Bhupendra Narayan Mandal University",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    email: "edemf@fc2.com",
  },
  {
    color: "#61be2e",
    name: "Lurline Denerley",
    avatar:
      "https://robohash.org/pariaturmollitiaillum.png?size=50x50&set=set1",
    university: "Kyushu University",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "ldenerleymg@1und1.de",
  },
  {
    color: "#900c7e",
    name: "Eleen Valde",
    avatar: "https://robohash.org/omnisnequeminima.png?size=50x50&set=set1",
    university: "Universidad Insurgentes Plantel León",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    email: "evaldemh@homestead.com",
  },
  {
    color: "#ff930d",
    name: "Blythe Plowright",
    avatar:
      "https://robohash.org/reprehenderitdoloremquasi.png?size=50x50&set=set1",
    university: "Technological Education Institute of Epiros",
    sentences: "In quis justo. Maecenas rhoncus aliquam lacus.",
    email: "bplowrightmi@t.co",
  },
  {
    color: "#1977a8",
    name: "Care Colthard",
    avatar: "https://robohash.org/estomnisaut.png?size=50x50&set=set1",
    university: "Australian Correspondence Schools",
    sentences:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "ccolthardmj@elpais.com",
  },
  {
    color: "#985dd9",
    name: "Siward Aberkirder",
    avatar: "https://robohash.org/enimquiillo.png?size=50x50&set=set1",
    university: "Technological University (Mandalay)",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    email: "saberkirdermk@illinois.edu",
  },
  {
    color: "#3f1e87",
    name: "Toinette Tomblin",
    avatar: "https://robohash.org/voluptasdolorquod.png?size=50x50&set=set1",
    university: 'University of Roma "Tor Vergata"',
    sentences:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "ttomblinml@tripadvisor.com",
  },
  {
    color: "#b68fdc",
    name: "Gustavo Buckston",
    avatar: "https://robohash.org/voluptasautqui.png?size=50x50&set=set1",
    university: "Takoradi Polytechnic ",
    sentences:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    email: "gbuckstonmm@naver.com",
  },
  {
    color: "#160f95",
    name: "Martina Kesby",
    avatar: "https://robohash.org/quasvoluptasut.png?size=50x50&set=set1",
    university: "University of Tartu",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "mkesbymn@nba.com",
  },
  {
    color: "#efffe6",
    name: "Javier Heditch",
    avatar: "https://robohash.org/nisiquamblanditiis.png?size=50x50&set=set1",
    university: "Universidad EAFIT",
    sentences:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    email: "jheditchmo@nhs.uk",
  },
  {
    color: "#47a66f",
    name: "Tally Gadsdon",
    avatar: "https://robohash.org/estistemolestiae.png?size=50x50&set=set1",
    university: "Universidad del Valle de Puebla",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "tgadsdonmp@pinterest.com",
  },
  {
    color: "#e0711c",
    name: "Brig Mankor",
    avatar:
      "https://robohash.org/consequunturullamlaudantium.png?size=50x50&set=set1",
    university: "Aichi University of Education",
    sentences:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "bmankormq@tuttocitta.it",
  },
  {
    color: "#b3963f",
    name: "Kordula Fargher",
    avatar:
      "https://robohash.org/dignissimosquovoluptas.png?size=50x50&set=set1",
    university: "Universidad Antonio Nariño",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    email: "kfarghermr@army.mil",
  },
  {
    color: "#93ec84",
    name: "Gerrilee Veazey",
    avatar: "https://robohash.org/errordistinctioalias.png?size=50x50&set=set1",
    university: "Skidmore College",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    email: "gveazeyms@indiegogo.com",
  },
  {
    color: "#9138c1",
    name: "Bennett Tibbles",
    avatar: "https://robohash.org/quaecumdoloribus.png?size=50x50&set=set1",
    university: "Universidad Politecnica de Nicaragua",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    email: "btibblesmt@ca.gov",
  },
  {
    color: "#eca3e4",
    name: "Juan Maplesden",
    avatar: "https://robohash.org/aremnesciunt.png?size=50x50&set=set1",
    university: "Shiraz University",
    sentences:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    email: "jmaplesdenmu@live.com",
  },
  {
    color: "#211dc7",
    name: "Morten Cuppitt",
    avatar:
      "https://robohash.org/voluptasquasdoloremque.png?size=50x50&set=set1",
    university: "Kazan State Music Conservatory",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    email: "mcuppittmv@canalblog.com",
  },
  {
    color: "#57116a",
    name: "Dina Munning",
    avatar: "https://robohash.org/fugiatsimiliqueex.png?size=50x50&set=set1",
    university: "Rutgers, The State University of New Jersey - Newark",
    sentences:
      "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    email: "dmunningmw@163.com",
  },
  {
    color: "#3f3929",
    name: "Ellie Perotti",
    avatar: "https://robohash.org/nihilestoptio.png?size=50x50&set=set1",
    university: "Mansfield University of Pennsylvania",
    sentences:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    email: "eperottimx@vimeo.com",
  },
  {
    color: "#1db0c1",
    name: "Walt Jessen",
    avatar:
      "https://robohash.org/ettemporibusdistinctio.png?size=50x50&set=set1",
    university: "Crimea State Medical University",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    email: "wjessenmy@w3.org",
  },
  {
    color: "#10535b",
    name: "Charlie Jesse",
    avatar: "https://robohash.org/quisedaut.png?size=50x50&set=set1",
    university: "Christian Heritage College",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    email: "cjessemz@yahoo.co.jp",
  },
  {
    color: "#88ce70",
    name: "Becca Callf",
    avatar: "https://robohash.org/quiaenimut.png?size=50x50&set=set1",
    university: "Linguistic University of Nizhny Novgorod",
    sentences:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "bcallfn0@artisteer.com",
  },
  {
    color: "#fc3301",
    name: "Brigitta Danbrook",
    avatar:
      "https://robohash.org/delectusasperioressed.png?size=50x50&set=set1",
    university: "Fachhochschule Stuttgart, Hochschule für Technik",
    sentences:
      "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "bdanbrookn1@altervista.org",
  },
  {
    color: "#79b387",
    name: "Casandra Ivantyev",
    avatar: "https://robohash.org/harumomnissed.png?size=50x50&set=set1",
    university: "The Art Institute of Boston",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "civantyevn2@hud.gov",
  },
  {
    color: "#804162",
    name: "August O'Crigane",
    avatar: "https://robohash.org/eiussitquo.png?size=50x50&set=set1",
    university: "Dublin Institute for Advanced Studies",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    email: "aocriganen3@unicef.org",
  },
  {
    color: "#8646b3",
    name: "Row Swaite",
    avatar: "https://robohash.org/iddistinctioaut.png?size=50x50&set=set1",
    university: "American University of Antigua",
    sentences:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    email: "rswaiten4@amazon.com",
  },
  {
    color: "#c4970a",
    name: "Emylee McIlraith",
    avatar: "https://robohash.org/doloribusaperiamab.png?size=50x50&set=set1",
    university:
      "Schiller International University, American College of Switzerland",
    sentences:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    email: "emcilraithn5@joomla.org",
  },
  {
    color: "#e3e59a",
    name: "Lianna Coultass",
    avatar: "https://robohash.org/ipsaomnisipsam.png?size=50x50&set=set1",
    university: "Islamic Azad University, Bandar Abbas",
    sentences:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    email: "lcoultassn6@blogspot.com",
  },
  {
    color: "#2c9ac1",
    name: "Glenn Schafer",
    avatar:
      "https://robohash.org/consequaturnobislibero.png?size=50x50&set=set1",
    university: "Islamic Azad University, Tehran Medical",
    sentences:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    email: "gschafern7@digg.com",
  },
  {
    color: "#993a28",
    name: "Tirrell Rosevear",
    avatar: "https://robohash.org/fugitdoloribusut.png?size=50x50&set=set1",
    university: "Urmia University of Medical Sciences",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "trosevearn8@intel.com",
  },
  {
    color: "#57fcd8",
    name: "Benedict Ringwood",
    avatar: "https://robohash.org/etdoloremdolor.png?size=50x50&set=set1",
    university: "Southwest Missouri State University - West Plains",
    sentences: "In hac habitasse platea dictumst.",
    email: "bringwoodn9@shutterfly.com",
  },
  {
    color: "#423fd8",
    name: "Mal Stein",
    avatar: "https://robohash.org/modiautharum.png?size=50x50&set=set1",
    university: "University of Mkar",
    sentences:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    email: "msteinna@rediff.com",
  },
  {
    color: "#5b4527",
    name: "Leonardo Carlisle",
    avatar: "https://robohash.org/etcorruptiest.png?size=50x50&set=set1",
    university: "Universidad Estatal de Bolívar",
    sentences:
      "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "lcarlislenb@skype.com",
  },
  {
    color: "#99dd9d",
    name: "Wyatt Taleworth",
    avatar:
      "https://robohash.org/perferendisipsamdeserunt.png?size=50x50&set=set1",
    university: "Newberry College",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    email: "wtaleworthnc@shareasale.com",
  },
  {
    color: "#36252b",
    name: "Tiebout Llorens",
    avatar:
      "https://robohash.org/deseruntmolestiasquibusdam.png?size=50x50&set=set1",
    university: "Osaka University of Health and Sport Sciences",
    sentences:
      "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    email: "tllorensnd@nba.com",
  },
  {
    color: "#04d13f",
    name: "Olenolin Cappell",
    avatar: "https://robohash.org/commodiutdeserunt.png?size=50x50&set=set1",
    university: "Acdemic Center for Law and Business",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    email: "ocappellne@wikimedia.org",
  },
  {
    color: "#d07883",
    name: "Dominique Craigheid",
    avatar: "https://robohash.org/delenitieumest.png?size=50x50&set=set1",
    university: "Fachhochschule St. Pölten",
    sentences:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    email: "dcraigheidnf@nature.com",
  },
  {
    color: "#e9aecf",
    name: "Luther Tickle",
    avatar: "https://robohash.org/eoshicnatus.png?size=50x50&set=set1",
    university: "Nakamura Gakuen University",
    sentences:
      "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    email: "ltickleng@pbs.org",
  },
  {
    color: "#e7d60c",
    name: "Norman Rouse",
    avatar:
      "https://robohash.org/repudiandaeetmolestiae.png?size=50x50&set=set1",
    university: "Technological Education Institute of Piraeus",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    email: "nrousenh@google.com.hk",
  },
  {
    color: "#579936",
    name: "Nicholas McRae",
    avatar: "https://robohash.org/sedfacilisea.png?size=50x50&set=set1",
    university: "Huaihai Institute of Technology",
    sentences:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    email: "nmcraeni@businessinsider.com",
  },
  {
    color: "#52297e",
    name: "Luke Ricciardiello",
    avatar:
      "https://robohash.org/necessitatibusrerumsint.png?size=50x50&set=set1",
    university: "Universidad Católica de Córdoba",
    sentences: "Mauris lacinia sapien quis libero.",
    email: "lricciardiellonj@eepurl.com",
  },
  {
    color: "#6786a0",
    name: "Chloris Scarre",
    avatar: "https://robohash.org/teneturquasharum.png?size=50x50&set=set1",
    university: "Mount Kenya University",
    sentences: "Nulla suscipit ligula in lacus.",
    email: "cscarrenk@eepurl.com",
  },
  {
    color: "#1ccd12",
    name: "Enrika Anthoney",
    avatar: "https://robohash.org/eosaccusamuset.png?size=50x50&set=set1",
    university: "Mozyr State Pedagogical Institute",
    sentences:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    email: "eanthoneynl@gnu.org",
  },
  {
    color: "#b131e5",
    name: "Celina McTrustie",
    avatar:
      "https://robohash.org/abconsequaturvoluptatibus.png?size=50x50&set=set1",
    university: "Argosy University",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    email: "cmctrustienm@livejournal.com",
  },
  {
    color: "#66ef90",
    name: "Stavro Lepper",
    avatar: "https://robohash.org/quocommodidolorem.png?size=50x50&set=set1",
    university: "Takoradi Polytechnic ",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    email: "sleppernn@guardian.co.uk",
  },
  {
    color: "#0919f2",
    name: "Marguerite Crepel",
    avatar: "https://robohash.org/autautsit.png?size=50x50&set=set1",
    university: "Bosaso College",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    email: "mcrepelno@163.com",
  },
  {
    color: "#3ad1a9",
    name: "Adorne Marcroft",
    avatar: "https://robohash.org/etcupiditateunde.png?size=50x50&set=set1",
    university: "Hanover College",
    sentences:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    email: "amarcroftnp@upenn.edu",
  },
  {
    color: "#16100e",
    name: "Sybilla Vanyakin",
    avatar: "https://robohash.org/aipsaquia.png?size=50x50&set=set1",
    university: "Ohio University - Lancaster",
    sentences:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    email: "svanyakinnq@jalbum.net",
  },
  {
    color: "#f7255c",
    name: "Shirlee Newlin",
    avatar: "https://robohash.org/etarchitectonemo.png?size=50x50&set=set1",
    university: "University of Education",
    sentences:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    email: "snewlinnr@shareasale.com",
  },
  {
    color: "#508eac",
    name: "Tildi Walewski",
    avatar: "https://robohash.org/minusipsamalias.png?size=50x50&set=set1",
    university: "Australian Defence Force Academy",
    sentences:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    email: "twalewskins@is.gd",
  },
  {
    color: "#a4902c",
    name: "Alric Colegrove",
    avatar: "https://robohash.org/harumnamrerum.png?size=50x50&set=set1",
    university: "Jawaharlal Nehru Centre for Advanced  Scientific Research",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    email: "acolegrovent@elpais.com",
  },
  {
    color: "#6bd9d1",
    name: "Aloisia Codman",
    avatar:
      "https://robohash.org/magniexercitationemsint.png?size=50x50&set=set1",
    university: "Kunstakademie Düsseldorf.",
    sentences:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    email: "acodmannu@answers.com",
  },
  {
    color: "#7300f1",
    name: "Jolyn Kolin",
    avatar: "https://robohash.org/quidemporrovoluptas.png?size=50x50&set=set1",
    university: "Indiana University-Purdue University at Fort Wayne",
    sentences:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    email: "jkolinnv@ovh.net",
  },
  {
    color: "#69cbce",
    name: "Selle O'Duane",
    avatar: "https://robohash.org/nondictadolorem.png?size=50x50&set=set1",
    university: "Ukrainian Academy of Pharmacy",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    email: "soduanenw@google.fr",
  },
  {
    color: "#70c5bb",
    name: "Fidelio Toffolo",
    avatar: "https://robohash.org/voluptatemullamiure.png?size=50x50&set=set1",
    university: "University of Science and Technology",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    email: "ftoffolonx@indiegogo.com",
  },
  {
    color: "#6e2e22",
    name: "Enriqueta Scorton",
    avatar:
      "https://robohash.org/dignissimosaccusantiumplaceat.png?size=50x50&set=set1",
    university: "Arab Open University",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "escortonny@bloglines.com",
  },
  {
    color: "#3d86cf",
    name: "Cleavland Nussey",
    avatar: "https://robohash.org/repellendusodionam.png?size=50x50&set=set1",
    university: "Université du Maine",
    sentences: "Aliquam non mauris. Morbi non lectus.",
    email: "cnusseynz@businessinsider.com",
  },
  {
    color: "#6b8e07",
    name: "Petronella Parrington",
    avatar:
      "https://robohash.org/estnecessitatibusipsum.png?size=50x50&set=set1",
    university: "Kansas State University",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    email: "pparringtono0@blogger.com",
  },
  {
    color: "#466c6f",
    name: "Leonanie Spreull",
    avatar: "https://robohash.org/autnemodolorem.png?size=50x50&set=set1",
    university: "Shawnee State University",
    sentences:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    email: "lspreullo1@ask.com",
  },
  {
    color: "#8314c4",
    name: "Cirilo Sorro",
    avatar: "https://robohash.org/adipiscivelprovident.png?size=50x50&set=set1",
    university: "Wakayama University",
    sentences: "Aliquam erat volutpat. In congue.",
    email: "csorroo2@i2i.jp",
  },
  {
    color: "#50b4c7",
    name: "Chalmers Walne",
    avatar: "https://robohash.org/fugaliberout.png?size=50x50&set=set1",
    university: "Ohio University - Zanesville",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    email: "cwalneo3@pagesperso-orange.fr",
  },
  {
    color: "#ed87bc",
    name: "Tomkin Chree",
    avatar: "https://robohash.org/rationearchitectoea.png?size=50x50&set=set1",
    university: "Taipei Physical Education College",
    sentences:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    email: "tchreeo4@dyndns.org",
  },
  {
    color: "#c4b311",
    name: "Cam Beaton",
    avatar:
      "https://robohash.org/dignissimosprovidentest.png?size=50x50&set=set1",
    university: "Ateneo de Naga University",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    email: "cbeatono5@scientificamerican.com",
  },
  {
    color: "#74329b",
    name: "Ivy De Moreno",
    avatar: "https://robohash.org/sitrationedistinctio.png?size=50x50&set=set1",
    university: "Colorado School of Mines",
    sentences: "Maecenas pulvinar lobortis est.",
    email: "ideo6@dot.gov",
  },
  {
    color: "#906b1d",
    name: "Aldus Southgate",
    avatar: "https://robohash.org/laborumminimamagni.png?size=50x50&set=set1",
    university: "Foundation University",
    sentences:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    email: "asouthgateo7@live.com",
  },
  {
    color: "#3db884",
    name: "Selia Rau",
    avatar: "https://robohash.org/suscipitquiaillum.png?size=50x50&set=set1",
    university: "Dongduk Women's University",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    email: "srauo8@state.tx.us",
  },
  {
    color: "#935e75",
    name: "Fons Bolmann",
    avatar: "https://robohash.org/corporisametnon.png?size=50x50&set=set1",
    university: "Universidad Nacional Experimental de Guayana",
    sentences:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    email: "fbolmanno9@uiuc.edu",
  },
  {
    color: "#d0f61c",
    name: "Staffard Adderson",
    avatar: "https://robohash.org/etdolorillo.png?size=50x50&set=set1",
    university: "Nagoya Institute of Technology",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    email: "saddersonoa@woothemes.com",
  },
  {
    color: "#b65ec4",
    name: "Cosetta Ashingden",
    avatar: "https://robohash.org/quiveniamfacilis.png?size=50x50&set=set1",
    university: "Semyung University",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    email: "cashingdenob@usda.gov",
  },
  {
    color: "#170ea8",
    name: "Joelie Pitsall",
    avatar:
      "https://robohash.org/praesentiumvoluptatesnisi.png?size=50x50&set=set1",
    university: "Laurus Technical Institute",
    sentences: "Nam dui.",
    email: "jpitsalloc@reverbnation.com",
  },
  {
    color: "#cb5a5c",
    name: "Devi Ferras",
    avatar:
      "https://robohash.org/repudiandaeminimasequi.png?size=50x50&set=set1",
    university: "Universidad Autónoma del Caribe",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    email: "dferrasod@wordpress.org",
  },
  {
    color: "#7b7f41",
    name: "Kath Oddboy",
    avatar:
      "https://robohash.org/asperiorescorporisest.png?size=50x50&set=set1",
    university: "Nagoya Economics University",
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    email: "koddboyoe@apache.org",
  },
  {
    color: "#23ce81",
    name: "Christie Tebbit",
    avatar: "https://robohash.org/inautest.png?size=50x50&set=set1",
    university: "Shihezi University ",
    sentences:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    email: "ctebbitof@alexa.com",
  },
  {
    color: "#775578",
    name: "Stanly Helian",
    avatar: "https://robohash.org/sitducimussed.png?size=50x50&set=set1",
    university: "Universidad Autónoma de Chiapas",
    sentences: "Cras pellentesque volutpat dui.",
    email: "shelianog@imdb.com",
  },
  {
    color: "#a8edc7",
    name: "Beverie Fawlkes",
    avatar: "https://robohash.org/doloresipsameaque.png?size=50x50&set=set1",
    university: "University of Dubuque",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    email: "bfawlkesoh@jugem.jp",
  },
  {
    color: "#c27041",
    name: "Chiarra Derwin",
    avatar: "https://robohash.org/utipsumab.png?size=50x50&set=set1",
    university: "Alexandria University",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    email: "cderwinoi@mayoclinic.com",
  },
  {
    color: "#d1e66c",
    name: "Lorine Finney",
    avatar:
      "https://robohash.org/enimreiciendisinventore.png?size=50x50&set=set1",
    university: "University of Pittsburgh at Bradford",
    sentences:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "lfinneyoj@tripod.com",
  },
  {
    color: "#e4f3ad",
    name: "Wolfgang Fieldhouse",
    avatar: "https://robohash.org/autemsuntdolor.png?size=50x50&set=set1",
    university: "Johnson & Wales University",
    sentences:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "wfieldhouseok@stumbleupon.com",
  },
  {
    color: "#045685",
    name: "Maudie Kinforth",
    avatar: "https://robohash.org/eaqueutnihil.png?size=50x50&set=set1",
    university: "Southeastern University",
    sentences:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    email: "mkinforthol@livejournal.com",
  },
  {
    color: "#6eef1e",
    name: "Cornelius Corben",
    avatar: "https://robohash.org/commodiremvoluptatem.png?size=50x50&set=set1",
    university: "Universidad Santiago de Cali",
    sentences:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    email: "ccorbenom@mapquest.com",
  },
  {
    color: "#17c395",
    name: "Irma Laver",
    avatar:
      "https://robohash.org/repudiandaenullaalias.png?size=50x50&set=set1",
    university: "Daugavpils University",
    sentences:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
    email: "ilaveron@japanpost.jp",
  },
  {
    color: "#c5139a",
    name: "Sheelagh Gauvain",
    avatar: "https://robohash.org/nemoomnisvoluptatum.png?size=50x50&set=set1",
    university: "Trakia University Stara Zagora",
    sentences:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    email: "sgauvainoo@yolasite.com",
  },
  {
    color: "#6e04b4",
    name: "Auroora Laxon",
    avatar: "https://robohash.org/quiquasaliquid.png?size=50x50&set=set1",
    university: "El Shorouk Academy",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    email: "alaxonop@timesonline.co.uk",
  },
  {
    color: "#386e14",
    name: "Elsworth Beszant",
    avatar: "https://robohash.org/laboreistevoluptatem.png?size=50x50&set=set1",
    university: "Far East State Transport University",
    sentences:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    email: "ebeszantoq@networkadvertising.org",
  },
  {
    color: "#cf2fd3",
    name: "Dory McCrachen",
    avatar: "https://robohash.org/iustoeafuga.png?size=50x50&set=set1",
    university: "Ashton College",
    sentences:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    email: "dmccrachenor@wikimedia.org",
  },
  {
    color: "#5cf443",
    name: "Essa Stileman",
    avatar: "https://robohash.org/veletdeserunt.png?size=50x50&set=set1",
    university: "Amravati University",
    sentences: "Vestibulum rutrum rutrum neque.",
    email: "estilemanos@privacy.gov.au",
  },
  {
    color: "#5043b2",
    name: "Karel Quoit",
    avatar: "https://robohash.org/autemetin.png?size=50x50&set=set1",
    university: "ISFORT - Institut de Formation en Technologie Alimentaire",
    sentences:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    email: "kquoitot@huffingtonpost.com",
  },
  {
    color: "#09e341",
    name: "Quinn McLaughlin",
    avatar: "https://robohash.org/exipsummolestiae.png?size=50x50&set=set1",
    university: "Alhamd Islamic University",
    sentences:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "qmclaughlinou@weebly.com",
  },
  {
    color: "#a56de1",
    name: "Marianna Durbann",
    avatar:
      "https://robohash.org/perferendisvoluptasrepellendus.png?size=50x50&set=set1",
    university: "Texas College",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    email: "mdurbannov@businesswire.com",
  },
  {
    color: "#3e7058",
    name: "Jaquenette Bickle",
    avatar: "https://robohash.org/essenullaomnis.png?size=50x50&set=set1",
    university: "Ohio Wesleyan University",
    sentences:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    email: "jbickleow@skyrock.com",
  },
  {
    color: "#1c40c7",
    name: "Alena Fyall",
    avatar: "https://robohash.org/corruptiipsumqui.png?size=50x50&set=set1",
    university: "Universidad Nacional Mayor de San Marcos",
    sentences:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "afyallox@1688.com",
  },
  {
    color: "#801245",
    name: "Albertina Lemerle",
    avatar: "https://robohash.org/mollitiavelitsit.png?size=50x50&set=set1",
    university: "State University of New York at Oswego",
    sentences:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    email: "alemerleoy@1und1.de",
  },
  {
    color: "#a04a86",
    name: "Arly Goch",
    avatar: "https://robohash.org/ipsavoluptatemomnis.png?size=50x50&set=set1",
    university: "Changchun Teachers College",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    email: "agochoz@geocities.jp",
  },
  {
    color: "#48499d",
    name: "Margaretta Schreiner",
    avatar:
      "https://robohash.org/sitcorporisvoluptatem.png?size=50x50&set=set1",
    university: "University of Wisconsin - Oshkosh",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    email: "mschreinerp0@slideshare.net",
  },
  {
    color: "#9316bd",
    name: "Melba Casin",
    avatar: "https://robohash.org/nequelaboreab.png?size=50x50&set=set1",
    university: "James Cook University of North Queensland",
    sentences:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    email: "mcasinp1@uol.com.br",
  },
  {
    color: "#2a8de2",
    name: "Kizzie Skones",
    avatar: "https://robohash.org/magnivoluptateullam.png?size=50x50&set=set1",
    university: "Technical University of Budapest",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    email: "kskonesp2@webeden.co.uk",
  },
  {
    color: "#d8d915",
    name: "Vassily Petrescu",
    avatar: "https://robohash.org/eosrerumest.png?size=50x50&set=set1",
    university: "Hirosaki University",
    sentences:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    email: "vpetrescup3@networkadvertising.org",
  },
  {
    color: "#63f7db",
    name: "Ferrel Briereton",
    avatar: "https://robohash.org/sintdelectusnulla.png?size=50x50&set=set1",
    university: "University of Seychelles",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    email: "fbrieretonp4@gizmodo.com",
  },
  {
    color: "#93a01b",
    name: "Lorilyn Cossam",
    avatar:
      "https://robohash.org/repudiandaedoloresesse.png?size=50x50&set=set1",
    university: "Universidad de Antofagasta",
    sentences:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    email: "lcossamp5@flavors.me",
  },
  {
    color: "#3fc6bc",
    name: "Teresina Moxted",
    avatar: "https://robohash.org/nonquoitaque.png?size=50x50&set=set1",
    university: "Alagappa University",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
    email: "tmoxtedp6@ameblo.jp",
  },
  {
    color: "#a5a245",
    name: "Rosemarie Feaver",
    avatar: "https://robohash.org/etnihilquia.png?size=50x50&set=set1",
    university: "Korea National University of Physical Education",
    sentences:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    email: "rfeaverp7@rakuten.co.jp",
  },
  {
    color: "#a1fa5f",
    name: "Sammy Pierri",
    avatar: "https://robohash.org/velnequeut.png?size=50x50&set=set1",
    university: "United States Merchant Marine Academy",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    email: "spierrip8@who.int",
  },
  {
    color: "#689e79",
    name: "Dewey Adrian",
    avatar: "https://robohash.org/illoipsumamet.png?size=50x50&set=set1",
    university: "Märkische Fachhochschule Iserlohn",
    sentences:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    email: "dadrianp9@google.co.jp",
  },
  {
    color: "#d5a26a",
    name: "Jori Markova",
    avatar:
      "https://robohash.org/fugiatarchitectocorrupti.png?size=50x50&set=set1",
    university: "Agricultural-Technical Academy in Olsztyn",
    sentences:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    email: "jmarkovapa@imdb.com",
  },
  {
    color: "#7c6079",
    name: "Petr Macura",
    avatar: "https://robohash.org/quivelitquo.png?size=50x50&set=set1",
    university: "Minhaj University Lahore",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "pmacurapb@nsw.gov.au",
  },
  {
    color: "#fefda9",
    name: "Beryle Jakeman",
    avatar:
      "https://robohash.org/ipsumnisiexercitationem.png?size=50x50&set=set1",
    university: "Nagaland University",
    sentences:
      "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    email: "bjakemanpc@yolasite.com",
  },
  {
    color: "#5c8248",
    name: "Marlon Mellody",
    avatar:
      "https://robohash.org/exercitationemidiusto.png?size=50x50&set=set1",
    university: "Universidad del Tepeyac",
    sentences:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    email: "mmellodypd@nifty.com",
  },
  {
    color: "#67ec45",
    name: "Pansie Chadwick",
    avatar: "https://robohash.org/inodiodolor.png?size=50x50&set=set1",
    university: "University of California System",
    sentences:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    email: "pchadwickpe@sfgate.com",
  },
  {
    color: "#264135",
    name: "Padraic Rawlins",
    avatar: "https://robohash.org/eteaconsequuntur.png?size=50x50&set=set1",
    university: "Universitas Islam Malang",
    sentences:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    email: "prawlinspf@dropbox.com",
  },
  {
    color: "#ecfb5e",
    name: "Esma Hintze",
    avatar:
      "https://robohash.org/numquamconsecteturanimi.png?size=50x50&set=set1",
    university: "Benson Idahosa University",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    email: "ehintzepg@yale.edu",
  },
  {
    color: "#934d08",
    name: "Trula Juara",
    avatar: "https://robohash.org/inrepellendusfugiat.png?size=50x50&set=set1",
    university: "Universidade Estadual de Ponta Grossa",
    sentences: "Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "tjuaraph@google.com.au",
  },
  {
    color: "#2364c2",
    name: "Colan Winfield",
    avatar: "https://robohash.org/consequaturcumquenon.png?size=50x50&set=set1",
    university: "Academy of Humanities and Economics in Lodz",
    sentences:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    email: "cwinfieldpi@examiner.com",
  },
  {
    color: "#34ace0",
    name: "Raimund Baldetti",
    avatar: "https://robohash.org/sitsimiliqueut.png?size=50x50&set=set1",
    university: "Shawnee Community College",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    email: "rbaldettipj@eventbrite.com",
  },
  {
    color: "#65f518",
    name: "Erhard Gomby",
    avatar: "https://robohash.org/quibusdammaximeet.png?size=50x50&set=set1",
    university: "Institute of Finance Management",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "egombypk@cmu.edu",
  },
  {
    color: "#e6f251",
    name: "Darius Ghioni",
    avatar: "https://robohash.org/siteteum.png?size=50x50&set=set1",
    university: "Seiwa College",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    email: "dghionipl@apache.org",
  },
  {
    color: "#c8bb54",
    name: "Tamara Thornbarrow",
    avatar:
      "https://robohash.org/earumreiciendisaliquid.png?size=50x50&set=set1",
    university: "Global Open University , Nagaland",
    sentences: "Cras in purus eu magna vulputate luctus.",
    email: "tthornbarrowpm@livejournal.com",
  },
  {
    color: "#76c2c9",
    name: "Collin Jarrette",
    avatar:
      "https://robohash.org/impeditconsequaturreprehenderit.png?size=50x50&set=set1",
    university: "Halmstad University College",
    sentences:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    email: "cjarrettepn@ucoz.ru",
  },
  {
    color: "#ed8b35",
    name: "Jody Fearnall",
    avatar: "https://robohash.org/doloremquaeexpedita.png?size=50x50&set=set1",
    university: 'Universidad Catolica "Redemptoris Mater"',
    sentences:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
    email: "jfearnallpo@ask.com",
  },
  {
    color: "#1efdc6",
    name: "Michaela Wodham",
    avatar: "https://robohash.org/teneturquoipsam.png?size=50x50&set=set1",
    university:
      "St. Petersburg State Academy for Engineering Economics (ENGECON)",
    sentences:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    email: "mwodhampp@wp.com",
  },
  {
    color: "#b83c85",
    name: "Clair Really",
    avatar: "https://robohash.org/omniseteum.png?size=50x50&set=set1",
    university: "Shanxi Normal University",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    email: "creallypq@princeton.edu",
  },
  {
    color: "#2dd67c",
    name: "Essa Jery",
    avatar: "https://robohash.org/beataeverocorrupti.png?size=50x50&set=set1",
    university: "Fachhochschule Oldenburg/Ostfriesland/Wilhelmshaven",
    sentences:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "ejerypr@addtoany.com",
  },
  {
    color: "#1db593",
    name: "Graehme Starten",
    avatar: "https://robohash.org/etdoloremut.png?size=50x50&set=set1",
    university: "Hogeschool voor Wetenschap & Kunst",
    sentences:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    email: "gstartenps@51.la",
  },
  {
    color: "#eebb96",
    name: "Brody Swyer",
    avatar: "https://robohash.org/animidistinctioillum.png?size=50x50&set=set1",
    university: "Botswana College of Agriculture",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    email: "bswyerpt@pinterest.com",
  },
  {
    color: "#0a540e",
    name: "Yorgos Wadforth",
    avatar: "https://robohash.org/remutet.png?size=50x50&set=set1",
    university: "Oita Medical University",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "ywadforthpu@furl.net",
  },
  {
    color: "#af0a35",
    name: "Hagan Dower",
    avatar:
      "https://robohash.org/voluptatemexpeditanecessitatibus.png?size=50x50&set=set1",
    university: "Hai Duong University",
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    email: "hdowerpv@w3.org",
  },
  {
    color: "#5b753a",
    name: "Gene Kensley",
    avatar: "https://robohash.org/minusabquod.png?size=50x50&set=set1",
    university: "University of Karachi",
    sentences: "Phasellus in felis. Donec semper sapien a libero.",
    email: "gkensleypw@shinystat.com",
  },
  {
    color: "#1b2741",
    name: "Hetty Hischke",
    avatar:
      "https://robohash.org/quidemconsequunturaperiam.png?size=50x50&set=set1",
    university: "German University in Cairo",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    email: "hhischkepx@exblog.jp",
  },
  {
    color: "#6e8662",
    name: "Bald O'Dowling",
    avatar: "https://robohash.org/debitisvoluptasquas.png?size=50x50&set=set1",
    university: "Oberlin College",
    sentences:
      "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    email: "bodowlingpy@constantcontact.com",
  },
  {
    color: "#c898b5",
    name: "Simonne Bamsey",
    avatar:
      "https://robohash.org/temporibusnonvoluptatum.png?size=50x50&set=set1",
    university: "Qassim Private College",
    sentences:
      "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    email: "sbamseypz@livejournal.com",
  },
  {
    color: "#966e03",
    name: "Pavlov Corbert",
    avatar:
      "https://robohash.org/omnisrepudiandaelibero.png?size=50x50&set=set1",
    university: "Nippon Veterinary and Animalscience University",
    sentences:
      "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    email: "pcorbertq0@ustream.tv",
  },
  {
    color: "#6ccd67",
    name: "Latia Eyrl",
    avatar: "https://robohash.org/aomnislibero.png?size=50x50&set=set1",
    university: "American Conservatory Theater",
    sentences:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    email: "leyrlq1@oakley.com",
  },
  {
    color: "#c46601",
    name: "Keri Tebbit",
    avatar: "https://robohash.org/etquoad.png?size=50x50&set=set1",
    university: "University of North America",
    sentences:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    email: "ktebbitq2@icq.com",
  },
  {
    color: "#5b5e21",
    name: "Magnum Gerrit",
    avatar:
      "https://robohash.org/dignissimosassumendareiciendis.png?size=50x50&set=set1",
    university: "Tula State University",
    sentences:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    email: "mgerritq3@census.gov",
  },
  {
    color: "#802a80",
    name: "Dreddy Keelan",
    avatar: "https://robohash.org/eanobiscorrupti.png?size=50x50&set=set1",
    university: "University of Macau",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    email: "dkeelanq4@soup.io",
  },
  {
    color: "#561159",
    name: "Laverna Sealey",
    avatar: "https://robohash.org/rerumporrout.png?size=50x50&set=set1",
    university: "Eastern Nazarene College",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    email: "lsealeyq5@biglobe.ne.jp",
  },
  {
    color: "#e805a9",
    name: "Mavra Herety",
    avatar:
      "https://robohash.org/undeasperioresconsequatur.png?size=50x50&set=set1",
    university: "Universidade Federal de Alagoas",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
    email: "mheretyq6@123-reg.co.uk",
  },
  {
    color: "#9dc134",
    name: "Umeko Sidlow",
    avatar: "https://robohash.org/quiquidemest.png?size=50x50&set=set1",
    university: "Universidad Autónoma del Carmen",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    email: "usidlowq7@com.com",
  },
  {
    color: "#caac6f",
    name: "Pietrek Wildey",
    avatar:
      "https://robohash.org/optionumquamarchitecto.png?size=50x50&set=set1",
    university: "Webber College",
    sentences:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    email: "pwildeyq8@auda.org.au",
  },
  {
    color: "#624ac3",
    name: "Haily Mitchenson",
    avatar: "https://robohash.org/sapienteetquibusdam.png?size=50x50&set=set1",
    university: "Riyadh College of Dentistry and Pharmacy",
    sentences:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    email: "hmitchensonq9@yale.edu",
  },
  {
    color: "#c0ffb9",
    name: "Floria Badsworth",
    avatar: "https://robohash.org/animiautconsequatur.png?size=50x50&set=set1",
    university: "University of Moncton, Shippagan",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    email: "fbadsworthqa@go.com",
  },
  {
    color: "#269415",
    name: "Swen Cavee",
    avatar: "https://robohash.org/ipsaabet.png?size=50x50&set=set1",
    university: "Universidade Federal de Mato Grosso do Sul",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    email: "scaveeqb@ameblo.jp",
  },
  {
    color: "#7b8b3d",
    name: "Keane Jess",
    avatar: "https://robohash.org/autemvoluptatesest.png?size=50x50&set=set1",
    university: "St. John's University",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    email: "kjessqc@free.fr",
  },
  {
    color: "#b1bd03",
    name: "Hurlee Lilleycrop",
    avatar: "https://robohash.org/similiquequiaut.png?size=50x50&set=set1",
    university: "Dayalbagh Educational Institute",
    sentences:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    email: "hlilleycropqd@soundcloud.com",
  },
  {
    color: "#1bfb30",
    name: "Gunar Hallums",
    avatar:
      "https://robohash.org/consequatursuscipitmaiores.png?size=50x50&set=set1",
    university: "Ternopil State Ivan Pul'uj Technical University",
    sentences: "Cras in purus eu magna vulputate luctus.",
    email: "ghallumsqe@4shared.com",
  },
  {
    color: "#781441",
    name: "Erskine Fearby",
    avatar: "https://robohash.org/nullabeataedolorem.png?size=50x50&set=set1",
    university: "University of Zenica",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    email: "efearbyqf@businessweek.com",
  },
  {
    color: "#149922",
    name: "Fenelia Bedford",
    avatar:
      "https://robohash.org/repudiandaereprehenderitofficia.png?size=50x50&set=set1",
    university: "Université de Bourgogne",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "fbedfordqg@gnu.org",
  },
  {
    color: "#f10025",
    name: "Siana Cockerill",
    avatar: "https://robohash.org/excepturietet.png?size=50x50&set=set1",
    university: "American University College of Technology",
    sentences:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    email: "scockerillqh@admin.ch",
  },
  {
    color: "#813cbf",
    name: "Merrill Copper",
    avatar: "https://robohash.org/quiamaximeaspernatur.png?size=50x50&set=set1",
    university: "Ross University, School of Medicine",
    sentences:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    email: "mcopperqi@hugedomains.com",
  },
  {
    color: "#00e3d0",
    name: "Astra Tocqueville",
    avatar:
      "https://robohash.org/oditaccusantiumconsequatur.png?size=50x50&set=set1",
    university: "Northern State Medical University",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    email: "atocquevilleqj@seattletimes.com",
  },
  {
    color: "#23655e",
    name: "Carin Giacomasso",
    avatar: "https://robohash.org/estinquia.png?size=50x50&set=set1",
    university: "Nara University of Education",
    sentences:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    email: "cgiacomassoqk@shutterfly.com",
  },
  {
    color: "#fea1ca",
    name: "Gabi Keats",
    avatar: "https://robohash.org/voluptatumsuscipitad.png?size=50x50&set=set1",
    university: "Ferris State University",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "gkeatsql@jalbum.net",
  },
  {
    color: "#83a16c",
    name: "Alys Doxey",
    avatar: "https://robohash.org/adipisciblanditiisut.png?size=50x50&set=set1",
    university: "Taeshin Christian University",
    sentences:
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    email: "adoxeyqm@hhs.gov",
  },
  {
    color: "#6a0942",
    name: "Dawna Dwelley",
    avatar:
      "https://robohash.org/consequaturmaximequam.png?size=50x50&set=set1",
    university: "Kampala University",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    email: "ddwelleyqn@bloglovin.com",
  },
  {
    color: "#9aae54",
    name: "Giacopo Madgett",
    avatar: "https://robohash.org/accusantiumautnihil.png?size=50x50&set=set1",
    university: "Université de Saida",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    email: "gmadgettqo@blogs.com",
  },
  {
    color: "#5e09fa",
    name: "Pearce Crossfield",
    avatar: "https://robohash.org/autnisiblanditiis.png?size=50x50&set=set1",
    university: "Shumei University",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    email: "pcrossfieldqp@artisteer.com",
  },
  {
    color: "#f7b772",
    name: "Tad Moroney",
    avatar:
      "https://robohash.org/liberoconsequaturadipisci.png?size=50x50&set=set1",
    university: "Riyadh College of Dentistry and Pharmacy",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
    email: "tmoroneyqq@nationalgeographic.com",
  },
  {
    color: "#ddf954",
    name: "Hamilton Vigar",
    avatar: "https://robohash.org/enimutlaudantium.png?size=50x50&set=set1",
    university: "Bethlehem University",
    sentences:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "hvigarqr@clickbank.net",
  },
  {
    color: "#b40a21",
    name: "Estella Chalcroft",
    avatar: "https://robohash.org/etaccusamusminus.png?size=50x50&set=set1",
    university: "College for Creative Studies",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    email: "echalcroftqs@fotki.com",
  },
  {
    color: "#c750e3",
    name: "Brock Robez",
    avatar: "https://robohash.org/idetmaiores.png?size=50x50&set=set1",
    university: "Guangdong University of Foreign Studies",
    sentences:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    email: "brobezqt@skyrock.com",
  },
  {
    color: "#fdf3d7",
    name: "Mahala Drane",
    avatar: "https://robohash.org/esteumconsequuntur.png?size=50x50&set=set1",
    university: "World Maritime University",
    sentences:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    email: "mdranequ@guardian.co.uk",
  },
  {
    color: "#1c3367",
    name: "Doroteya Klemke",
    avatar:
      "https://robohash.org/pariaturofficiarepudiandae.png?size=50x50&set=set1",
    university: "Central Luzon State University",
    sentences:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "dklemkeqv@surveymonkey.com",
  },
  {
    color: "#bee7b7",
    name: "Tedie Dingate",
    avatar:
      "https://robohash.org/sapienteofficiisexcepturi.png?size=50x50&set=set1",
    university: "Hong Bang University International",
    sentences:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "tdingateqw@360.cn",
  },
  {
    color: "#f03a85",
    name: "Alvan Cartmell",
    avatar:
      "https://robohash.org/voluptatesestrepudiandae.png?size=50x50&set=set1",
    university: "Ohio State University - Marion",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    email: "acartmellqx@hibu.com",
  },
  {
    color: "#b599fb",
    name: "Easter Rzehor",
    avatar: "https://robohash.org/abquidolores.png?size=50x50&set=set1",
    university: "Senzoku Gakuen College",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    email: "erzehorqy@wsj.com",
  },
  {
    color: "#faec0c",
    name: "Ursula Houldcroft",
    avatar: "https://robohash.org/magniatin.png?size=50x50&set=set1",
    university: "Ecole Nationale de la Météorologie",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    email: "uhouldcroftqz@home.pl",
  },
  {
    color: "#827f6b",
    name: "Garrott Oherlihy",
    avatar: "https://robohash.org/temporibusetsuscipit.png?size=50x50&set=set1",
    university: "Tashkent School of Finance",
    sentences:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    email: "goherlihyr0@google.com.hk",
  },
  {
    color: "#b5a23b",
    name: "Jaquith Kivelhan",
    avatar:
      "https://robohash.org/aspernatursapientererum.png?size=50x50&set=set1",
    university: "Kyoto University of Education",
    sentences:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    email: "jkivelhanr1@theatlantic.com",
  },
  {
    color: "#1f8d35",
    name: "Augusta Archibold",
    avatar: "https://robohash.org/repellatomnisullam.png?size=50x50&set=set1",
    university: "Hebei University of Science and Technology",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    email: "aarchiboldr2@prnewswire.com",
  },
  {
    color: "#0fbbea",
    name: "Florida Demko",
    avatar:
      "https://robohash.org/doloribusimpeditinventore.png?size=50x50&set=set1",
    university: "Kursk State University",
    sentences: "Integer ac neque.",
    email: "fdemkor3@nature.com",
  },
  {
    color: "#663122",
    name: "Gilly Limon",
    avatar:
      "https://robohash.org/placeatminimaconsequatur.png?size=50x50&set=set1",
    university: "Palmer College of Chiropractic",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "glimonr4@shinystat.com",
  },
  {
    color: "#167b1e",
    name: "Grissel Bayston",
    avatar:
      "https://robohash.org/excepturinumquamassumenda.png?size=50x50&set=set1",
    university: "Benedictine University, Springfield College in Illinois",
    sentences:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    email: "gbaystonr5@hp.com",
  },
  {
    color: "#182c11",
    name: "Genni Laurenzi",
    avatar: "https://robohash.org/estnisiquis.png?size=50x50&set=set1",
    university: "Williams College",
    sentences:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
    email: "glaurenzir6@baidu.com",
  },
  {
    color: "#157a18",
    name: "Maxine Duddan",
    avatar: "https://robohash.org/delenitiharumnemo.png?size=50x50&set=set1",
    university: "Royal Veterinary and Agricultural University",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    email: "mduddanr7@e-recht24.de",
  },
  {
    color: "#a22c2a",
    name: "Timmy Cusworth",
    avatar: "https://robohash.org/architectoutsunt.png?size=50x50&set=set1",
    university: "Aichi University",
    sentences:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    email: "tcusworthr8@soundcloud.com",
  },
  {
    color: "#de56b6",
    name: "Danny Pinke",
    avatar:
      "https://robohash.org/doloresitaquedistinctio.png?size=50x50&set=set1",
    university: "University of Technology and Life Sciences",
    sentences:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    email: "dpinker9@clickbank.net",
  },
  {
    color: "#d3eff0",
    name: "Lizzy Darycott",
    avatar: "https://robohash.org/quasquiamodi.png?size=50x50&set=set1",
    university: "Universidad Nacional Santiago Antúnez de Mayolo",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "ldarycottra@rediff.com",
  },
  {
    color: "#0a2739",
    name: "Rip Parkin",
    avatar: "https://robohash.org/velitsitaccusamus.png?size=50x50&set=set1",
    university: "Taj Institute of Higher Education",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    email: "rparkinrb@skyrock.com",
  },
  {
    color: "#4d2883",
    name: "Julita Adriano",
    avatar: "https://robohash.org/eamagnamdignissimos.png?size=50x50&set=set1",
    university: "Hitec University",
    sentences:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    email: "jadrianorc@wiley.com",
  },
  {
    color: "#e709d4",
    name: "Brendon Lynas",
    avatar: "https://robohash.org/numquamsaepeullam.png?size=50x50&set=set1",
    university: "Georg-Simon-Ohm-Fachhochschule Nürnberg",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    email: "blynasrd@nba.com",
  },
  {
    color: "#7b6375",
    name: "Sallyann Larby",
    avatar: "https://robohash.org/autodiototam.png?size=50x50&set=set1",
    university: "Nepal Sanskrit University",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    email: "slarbyre@nature.com",
  },
  {
    color: "#0da9f2",
    name: "Halley Doveston",
    avatar:
      "https://robohash.org/doloresquaeratmollitia.png?size=50x50&set=set1",
    university: "Standford Online University",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    email: "hdovestonrf@macromedia.com",
  },
  {
    color: "#a41181",
    name: "Christy Scallan",
    avatar:
      "https://robohash.org/autemvoluptatesquaerat.png?size=50x50&set=set1",
    university: "University of Agriculture Faisalabad",
    sentences:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    email: "cscallanrg@posterous.com",
  },
  {
    color: "#ce455c",
    name: "Ginger Philcock",
    avatar: "https://robohash.org/suntmaioreset.png?size=50x50&set=set1",
    university: "Southwest Texas State University",
    sentences:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
    email: "gphilcockrh@google.pl",
  },
  {
    color: "#e093bc",
    name: "Merry Ferenczi",
    avatar: "https://robohash.org/numquamoditnisi.png?size=50x50&set=set1",
    university: "University of Aleppo",
    sentences: "Phasellus sit amet erat.",
    email: "mferencziri@ameblo.jp",
  },
  {
    color: "#904d82",
    name: "Frannie Lowne",
    avatar: "https://robohash.org/itaquevelitsaepe.png?size=50x50&set=set1",
    university: "Fujian Normal University",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    email: "flownerj@sfgate.com",
  },
  {
    color: "#3631d6",
    name: "Jolee Roos",
    avatar:
      "https://robohash.org/exercitationemenimnulla.png?size=50x50&set=set1",
    university: "Hasselt University",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    email: "jroosrk@ifeng.com",
  },
  {
    color: "#cae15e",
    name: "Lammond Kliemann",
    avatar: "https://robohash.org/estcumdistinctio.png?size=50x50&set=set1",
    university: "Westminster College of Salt Lake City",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    email: "lkliemannrl@bbc.co.uk",
  },
  {
    color: "#d6a519",
    name: "Doy Rackstraw",
    avatar: "https://robohash.org/sedsunttotam.png?size=50x50&set=set1",
    university: "Mankato State University",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    email: "drackstrawrm@theglobeandmail.com",
  },
  {
    color: "#dfca6a",
    name: "Gare Donovin",
    avatar: "https://robohash.org/sequiiureblanditiis.png?size=50x50&set=set1",
    university: "University of the Philippines Los Banos",
    sentences:
      "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    email: "gdonovinrn@time.com",
  },
  {
    color: "#fb5870",
    name: "Maurizio Alker",
    avatar: "https://robohash.org/hicutducimus.png?size=50x50&set=set1",
    university: "Universidad Francisco de Vitoria",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    email: "malkerro@nba.com",
  },
  {
    color: "#028e20",
    name: "Marj Hauger",
    avatar:
      "https://robohash.org/quaeratarchitectosimilique.png?size=50x50&set=set1",
    university: "Sri Padmavati Women's University",
    sentences:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    email: "mhaugerrp@un.org",
  },
  {
    color: "#2c1058",
    name: "Samara Zannini",
    avatar: "https://robohash.org/errorsuntest.png?size=50x50&set=set1",
    university: "Pontifícia Universidade Católica de Campinas",
    sentences:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    email: "szanninirq@pen.io",
  },
  {
    color: "#e0065d",
    name: "Daryl Ruddiforth",
    avatar: "https://robohash.org/earumremarchitecto.png?size=50x50&set=set1",
    university: "Austin College",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    email: "druddiforthrr@pbs.org",
  },
];

const newSection = document.createElement("section");
newSection.style.display = "grid";
newSection.style.gridTemplateColumns = `repeat(4, 1fr)`;
document.body.appendChild(newSection);

data.forEach((v) => {
  const newArticle = document.createElement("article");
  newArticle.style.display = "flex";
  newArticle.style.flexDirection = "column";
  newArticle.style.justifyContent = "center";
  newArticle.style.alignItems = "center";
  newArticle.style.textAlign = "center";
  newArticle.style.width = "400px";
  newArticle.style.height = "700px";
  newArticle.style.padding = "50px";
  newArticle.style.borderRadius = "50px";
  newArticle.style.backgroundColor = "#e6ffe6";

  const newImg = document.createElement("img");
  newImg.src = v.avatar;
  newImg.style.width = "200px";
  newImg.style.height = "200px";
  newImg.style.borderRadius = "9999px";
  newImg.style.backgroundColor = "white";
  newArticle.appendChild(newImg);

  const newH3 = document.createElement("h3");
  newH3.innerText = v.name;
  newH3.style.fontSize = "30px";
  newArticle.appendChild(newH3);

  const newSpan = document.createElement("span");
  newSpan.innerText = v.university;
  newArticle.appendChild(newSpan);

  const newP = document.createElement("p");
  newP.innerText = v.sentences;
  newArticle.appendChild(newP);

  const newDiv = document.createElement("div");
  newDiv.style.backgroundColor = v.color;
  newDiv.innerText = v.email;
  newDiv.style.color = "white";
  newDiv.style.padding = "10px 20px";
  newDiv.style.borderRadius = "10px";

  newArticle.appendChild(newDiv);

  newSection.appendChild(newArticle);
});
