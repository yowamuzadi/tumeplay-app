const contents = [
  {
    key: 1,
    id: 1,
    numberOfLines: 3,
    theme: 0,
    category: 0,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-regles.jpg"),
    title: 'Les règles, c\'est quoi ?',
    text: 'Chaque mois à partir de la puberté, l\u0092utérus se prépare à accueillir un \u009cuf fécondé. Pour ça, la muqueuse utérine s\u0092épaissit. A la fin de chaque cycle, si la fécondation (rencontre spermatozoïde & ovule) n\u0092a pas eu lieu, la partie superficielle de la muqueuse est évacuée : c\u0092est ce qu\u0092on appelle les règles. C\'est un phénomène naturel qui dure en général entre 3 et 7 jours.'
  },
  {
    key: 2,
    id: 2,
    numberOfLines: 3,
    theme: 0,
    category: 0,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-masturbationsperme.jpg"),
    title: 'Je me masturbe mais je n\'ai pas de sperme, c\'est grave docteur ?',
    text: 'Bien évidemment, une fille n\'a pas de sperme. Pour les garçons, les premières émissions de sperme se déclenchent 1 à 2 ans après le début de la puberté. Pas de puberté, pas de sperme donc. Si un garçon se masturbe plusieurs fois par jour, il peut arriver qu\'il éjacule moins (ou plus du tout) de sperme. Son « stock » mettra plusieurs heures pour se reconstituer.'
  },
  {
    key: 3,
    id: 3,
    numberOfLines: 3,
    theme: 0,
    category: 0,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-vulve.jpg"),
    title: 'Mille et une vulve ?',
    text: 'Tous les sexes féminins sont composés des mêmes structures et organes mais ne se ressemblent pas tous. 50% des femmes ont les lèvres intérieures qui dépassent les extérieures, 30% ont les deux de la même taille et 20% seulement ont les lèvres intérieures plus courtes que les extérieures. Toutes différentes. C\'est du blabla ? Regarde notre galerie.'
  },
  {
    key: 4,
    id: 4,
    numberOfLines: 3,
    theme: 0,
    category: 0,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-peniscourbe.jpg"),
    title: 'Mille et un pénis ?',
    text: 'Tous les sexes masculins sont composés des mêmes structures et organes mais ne se ressemblent pas tous, ni en taille, ni en diamètre. Tous les pénis sont beaux, chacun à sa façon. Parfois mieux vaut être avec un petit agile qu\'un gros fainéant.'
  },
  {
    key: 5,
    id: 5,
    numberOfLines: 3,
    theme: 0,
    category: 0,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-pertesblanches.jpg"),
    title: 'Les pertes blanches, c\'est quoi ?',
    text: 'Le vagin est tapissé d\u0092une muqueuse qui ressemble à celle de l\u0092intérieur des joues. Comme toutes les muqueuses, la muqueuse vaginale produit un liquide en continu qui permet un auto-nettoyage constant et un maintien d\u0092une flore équilibrée. Il peut se manifester par des pertes blanches.'
  },
  {
    key: 6,
    id: 6,
    numberOfLines: 3,
    theme: 0,
    category: 0,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-erectionfille.jpg"),
    title: 'C\'est grand comment un vagin ?',
    text: 'Le vagin mesure entre 8 et 12 cm. Il relie la vulve à l\'utérus via le col de l\'utérus. Il est extensible et sa dimension peut varier.Le vagin ne peut pas être trop petit car il s\u0092adapte à toutes les tailles de pénis ou de sex toys.'
  },
  {
    key: 7,
    id: 7,
    numberOfLines: 3,
    theme: 0,
    category: 0,
    picture: require("../../assets/pictures/contents/ETS-photocontenus-sodo.jpg"),
    title: 'Dessine moi un pénis',
    text: 'Le pénis est composé du gland qui lui, est entouré par le prépuce, pli de peau qui peut se retirer pour découvrir le gland et qui est supprimé si l\u0092on est circoncis. Le prépuce est relié au gland par une bande de peau, le frein. L\u0092urètre, se trouve au bout du gland. L\u0092urètre sert à la fois à uriner et à éjaculer.'
  },
  {
    key: 8,
    id: 8,
    numberOfLines: 3,
    theme: 0,
    category: 0,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-mesure.jpg"),
    title: 'Clito, tu mesures combien ?',
    text: 'Le clitoris dans son entier, le gland, le coude et les 4 ramification, mesure en moyenne 12 cm.'
  },
  {
    key: 9,
    id: 9,
    numberOfLines: 3,
    theme: 0,
    category: 0,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-taillepenis.jpg"),
    title: 'La taille du pénis parfait c\'est ?',
    text: 'La pénis en érection mesure en moyenne 13 cm. Cependant, tous les pénis sont différents en termes de formes ou de tailles. Il n\'y a pas de pénis parfait, ça dépend des préférences de chacun\u0095e !'
  },
  {
    key: 10,
    id: 10,
    numberOfLines: 3,
    theme: 0,
    category: 0,
    picture: require("../../assets/pictures/contents/ETS-photocontenus-sodo.jpg"),
    title: 'Une erection chez un homme, ça se passe comment ?',
    text: 'Une érection du pénis est un phénomène réflexe répondant le plus souvent à une excitation. Quand le pénis durcit et se dresse, il se remplit de sang et ça augmente sa taille et sa circonférence. Cette rigidité temporaire facilite la pénétration, la masturbation...\nLa pénis en érection mesure en moyenne 13 cm. Cependant, tous les pénis sont différents en termes de formes ou de tailles.'
  },
  {
    key: 11,
    id: 11,
    numberOfLines: 3,
    theme: 0,
    category: 0,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-ejacula.jpg"),
    title: 'Quel est le point commun entre sperme et cuillère à café ?',
    text: 'La quantité de sperme émise ne se mesure pas en litres, c\'est à peu près une cuillère à café. Plus on a des éjaculations rapprochées, plus la quantité diminue et le sperme devient transparent. La quantité de sperme ne détermine pas le plaisir ! Mais une goutte peut suffire à transmettre une IST ou provoquer une grossesse donc, sans devenir parano, mieux vaut se protéger ;).'
  },
  {
    key: 12,
    id: 12,
    numberOfLines: 3,
    theme: 0,
    category: 1,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-douleur.jpg"),
    title: 'La première pénétration fait toujours mal ?',
    text: 'Faux ! Il peut arriver que la fille ait mal la première fois si son vagin n\'est pas assez lubrifié, parce qu\'elle est stressée, que ça va trop vite, etc. Ses muscles sont alors contractés et le rapport peut faire mal. Un climat de confiance et de communication permet d\'éviter cette situation. À l\'inverse, un garçon stressé peut avoir du mal à bander.'
  },
  {
    key: 13,
    id: 13,
    numberOfLines: 3,
    theme: 0,
    category: 1,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-homosexuel.jpg"),
    title: 'Les animaux aussi peuvent être homosexuels ?',
    text: 'On compte pas moins de 1500 espèces animales (mammifères, oiseaux, reptiles et insectes) ayant des comportements homosexuels. Certaines espèces entretiennent même des relations de longue durée avec un partenaire de même sexe. L\'homosexualité n\'existe pas uniquement chez l\'être humain.'
  },
  {
    key: 14,
    id: 14,
    numberOfLines: 3,
    theme: 0,
    category: 1,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-masturbation.jpg"),
    title: 'Je me masturbe, tu te masturbe, il et elle se masturbent ?',
    text: 'Les filles peuvent se masturber si elles en ont envie. La masturbation ce sont des caresses, de petits va-et-vient, des frottements, des pressions etc. au niveau des parties génitales internes ou externes qui procurent du plaisir. Elle peuvent le faire seule ou pas. 87% des femmes se sont masturbées au moins une fois dans leur vie.'
  },
  {
    key: 15,
    id: 15,
    numberOfLines: 3,
    theme: 0,
    category: 1,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-pasenvie.jpg"),
    title: 'Pas envie de coucher ?',
    text: 'Ce n\'est pas bizarre de ne pas avoir envie d\'avoir des rapports sexuels et ce n\'est pas grave. Certaines personnes n\'ont juste pas envie et c\'est tout à fait possible. Cependant, si tu aimerais avoir des rapports mais que tu ne ressens pas de désir alors que tu aimerais en ressentir (libido, désir sexuel faible), consulte un professionnel de santé.'
  },
  {
    key: 16,
    id: 16,
    numberOfLines: 3,
    theme: 0,
    category: 1,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-poils.jpg"),
    title: 'Est-ce que il faut tout raser comme dans les vidéos ?',
    text: 'S\'épiler est un choix personnel et ce n\'est pas forcément plus hygiénique. En fait, l\'hygiène n\'a rien à voir avec les poils. Les poils ne protègent pas contre les infections sexuellement transmissibles. En dehors de l\'hygiène intime, celle du corps, celle des mains, qui sont recommandées : chacun fait ce qu\'il veut avec ses poils !'
  },
  {
    key: 17,
    id: 17,
    numberOfLines: 3,
    theme: 0,
    category: 1,
    picture: require("../../assets/pictures/contents/ETS-photocontenu-vaginisme.jpg"),
    title: 'L\'hymen, c\'est quoi ?',
    text: ' L\u0092hymen est une petite membrane de forme et d\u0092épaisseur variables qui ferme plus ou moins partiellement le vagin. Cette membrane s\'assouplit et s\'ouvre davantage lors des premiers rapports sexuels. 1/3 des femmes n\'ont jamais eu d\'hymen. Une fille ne saigne pas forcément lors de la première pénétration.'
  },
  {
    key: 18,
    id: 18,
    numberOfLines: 3,
    theme: 0,
    category: 1,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-ejactorgasme.jpg"),
    title: 'Rêves et éjaculation',
    text: 'Rêver de choses érotiques, c\u0092est normal. Ça arrive à l\u0092adolescence mais ça continue après. Ces rêves peuvent déclencher un orgasme, une éjaculation. Dans un rêve érotique, on choisit pas le scénario, il s\u0092impose. Pas de panique ! Rêver de certaines choses même bizarres ne veut pas dire qu\'on est pervers. Il ne faut pas prendre les rêves au premier degré.'
  },
  {
    key: 19,
    id: 19,
    numberOfLines: 3,
    theme: 0,
    category: 1,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-fantasme.jpg"),
    title: 'Avoir des fantasmes, c\'est ok ?',
    text: 'Les fantasmes, c\u0092est tout ce qu\u0092on peut imaginer et qui provoque notre excitation sexuelle. Des fantasmes, tout le monde peut en avoir. Ou pas. Pas de règle en la matière. On peut s\u0092imaginer dans telle ou telle position, dans tel ou tel lieu, avec tel\u0095le\u0095s partenaire\u0095s. Et ça n\u0092a rien de grave.'
  },
  {
    key: 20,
    id: 20,
    numberOfLines: 3,
    theme: 0,
    category: 1,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-masturbation.jpg"),
    title: 'Se masturber, c\'est dangeureux ?',
    text: 'Certaines personnes se masturbent tous les jours ou presque, et la masturbation concerne une grande partie des hommes et des femmes. Attention, ce n\'est pas une obligation : chacun\u0095e fait comme il souhaite. Mais se masturber c\'est tout à fait normal et ce n\'est en aucun cas dangeureux !'
  },
  {
    key: 21,
    id: 21,
    numberOfLines: 3,
    theme: 0,
    category: 1,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-nocturne.jpg"),
    title: 'Les pollutions nocturnes, c\'est quoi ?',
    text: 'Le sperme peut parfois sortir de manière incontrôlée. Ça arrive souvent durant le sommeil. Ça peut arriver pendant la journée mais plus rarement. C\u0092est ce qu\u0092on appelle l\u0092éjaculation ou la pollution nocturne (ou aussi le « rêve mouillé », le « wet dream »). Ça témoigne souvent du début de la puberté et c\'est fréquent chez l\u0092ado. Ça existe aussi chez l\u0092homme adulte.'
  },
  {
    key: 22,
    id: 22,
    numberOfLines: 3,
    theme: 0,
    category: 1,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-externe.jpg"),
    title: 'Le préservatif externe, c\'est quoi ?',
    text: 'Le préservatif externe est aussi appelé préservatif masculin. Il se déroule sur le pénis. Il existe en différentes tailles, effets ou matières (nervuré, ultra-fin, avec des goûts, latex ou pas). On peut l\'acheter en pharmacie, supermarché, sur Internet ou en avoir gratuitement dans certaines associations ou par ordonnance du médecin. Attention à vérifier la date de péremption !'
  },
  {
    key: 23,
    id: 23,
    numberOfLines: 3,
    theme: 0,
    category: 2,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-taillepenis.jpg"),
    title: 'Les pénis, c\'est une question de proportion ?',
    text: 'Oh la légende urbaine ! La taille d\'une personne ne donne aucune idée de la taille de son sexe. La seule façon de connaître la taille c\u0092est de mesurer le pénis en érection entre le bas du ventre et le bout du gland. La taille moyenne du pénis en érection est de 13 cm. Et pour le plaisir, ce n\'est pas la taille qui compte ;)'
  },
  {
    key: 24,
    id: 24,
    numberOfLines: 3,
    theme: 0,
    category: 2,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-taillepenis.jpg"),
    title: 'Pouce et pénis, meilleurs potes ?',
    text: 'On a tous déjà entendu que la taille du pénis pouvait être estimé en fonction de la taille du pouce. C\'est évidement faux. La longueur des doigts ne donne aucune idée de la taille de son sexe. La seule façon de connaître la taille c\u0092est de mesurer le pénis en érection entre le bas du ventre et le bout du gland. La taille moyenne du pénis en érection est de 13 cm. Et pour le plaisir, ce n\'est pas la taille qui compte ;)'
  },
  {
    key: 25,
    id: 25,
    numberOfLines: 3,
    theme: 0,
    category: 3,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-loiage.jpg"),
    title: 'À partir de quel age la lois autorise à avoir des rapports sexuels ?',
    text: 'Il n\u0092y a pas d\u0092âge légal à partir duquel on peut avoir des rapports sexuels. Cependant, un mineur de moins de 15 ans ne peut pas avoir de rapports sexuels avec un majeur de plus de 18 ans.'
  },
  {
    key: 26,
    id: 26,
    numberOfLines: 3,
    theme: 0,
    category: 3,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-enceinte.jpg"),
    title: 'On peut forcer une mineure à avorter ?',
    text: 'Il est interdit de forcer une femme, mineure ou majeure, à avorter. Les parents, le partenaires, les professionnels sont là pour conseiller mais ne peuvent pas faire pression sur leur enfant. La décision finale n\'appartient qu\'à la femme enceinte. Ainsi pratiquer un avortement sans le consentement de la femme enceinte est puni par la loi.'
  },
  {
    key: 27,
    id: 27,
    numberOfLines: 3,
    theme: 0,
    category: 3,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-enceinte.jpg"),
    title: 'Avortement et consentement, ça dit quoi ?',
    text: 'Il est interdit de forcer une femme, mineure ou majeure, à avorter. La décision finale n\'appartient qu\'à la femme enceinte. Le partenaire est là pour conseiller mais ne peut pas faire pression. Pratiquer une interruption de grossesse sans le consentement de la femme enceinte peut être puni de cinq ans d\'emprisonnement et de 75 000 euros d\'amende.'
  },
  {
    key: 28,
    id: 28,
    numberOfLines: 3,
    theme: 0,
    category: 3,
    picture: require("../../assets/pictures/contents/ETS-photocontenu-bisou.jpg"),
    title: 'Un bisou, c\'est toujours ok ?',
    text: 'On ne peut pas faire des bisous à une personne qui ne le souhaite pas, même si c\'est pour faire la bise. Chaque personne décide de ce dont elle a envie ou pas. À elle de choisir son\u0095sa partenaire. De refuser des bisous, des caresses ou d\u0092avoir des relations sexuelles non protégées. De dire « non » quand ce qu\u0092on lui propose ne lui plaît pas. Bref, d\u0092avoir la maîtrise de son corps. Et aux autres de respecter ses choix.'
  },
  {
    key: 29,
    id: 29,
    numberOfLines: 3,
    theme: 0,
    category: 4,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-IST.jpg"),
    title: 'IST, c\'est quoi ?',
    text: 'C\'est une Infection principalement Transmissible par voie Sexuelle (bucale, vaginale, anale, frottements intimes). On retrouve les chlamydia, la blennorragie, la syphilis, l\u0092hépatite B, l\u0092herpès génital, l\'HPV, le VIH/SIDA... Les préservatifs (externes ou inernes) ou carrés de latex permettent de s\'en protéger. En cas de doute, on passe par la case dépistage.'
  },
  {
    key: 30,
    id: 30,
    numberOfLines: 3,
    theme: 0,
    category: 4,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-IST.jpg"),
    title: 'Les mycose c\'est une IST ?',
    text: 'Une mycose n\'est pas une IST à proprement parler. C\'est une infection des organes génitaux par un champignon, fréquente et banale. Plein de facteurs peuvent expliquer son apparition (pantalons serrés, VIH, traitement antibiotique, pilule, 3ème trimestre de la grossesse, trop d\'hygiène, diabète, etc.). La mycose peut ressurgir après un rapport.'
  },
  {
    key: 31,
    id: 31,
    numberOfLines: 3,
    theme: 0,
    category: 4,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-sida.jpg"),
    title: 'Le VIH peut toucher tout le monde ?',
    text: 'Le VIH peut toucher n\'importe qui. Il peut se transmettre : 1) lors d\'un rapport sexuel non ou mal protégé avec une personne séropositive, 2) par transmission sanguine ou 3) lors de la grossesse d\'une femme séropositive à son enfant. Son dépistage est essentiel. Les préservatifs sont les seuls moyens de s\'en protéger lors des rapports sexuels.'
  },
  {
    key: 32,
    id: 32,
    numberOfLines: 3,
    theme: 0,
    category: 4,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-enceinte.jpg"),
    title: 'La contraception, c\'est quoi ?',
    text: 'Les contraceptions sont l\'ensemble des moyens qui permettent à une fille et un garçon d\'éviter une grossesse non désirée lors de relations sexuelles. En France, certaines contraceptions (pilule, stérilet, etc.) peuvent être délivrées gratuitement et anonynement aux mineurs (moins de 18 ans) dans un centre de plannification familiale, ou prescrites par un médecin ou sage-femme.'
  },
  {
    key: 33,
    id: 33,
    numberOfLines: 3,
    theme: 0,
    category: 4,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-ejacula.jpg"),
    title: 'On ne risque pas de tomber enseinte si on se retire avant ?',
    text: 'Avant l\'éjaculation, un liquide séminal peut s\'écouler. Ce liquide peut contenir des spermatozoïdes qui peuvent féconder l\'ovule : si c\'est le cas, la fille est enceinte. Le retrait n\'est donc pas une méthode efficace pour éviter une grossesse. En plus, le préservatif est la seule protection utile contre les IST.'
  },
  {
    key: 34,
    id: 34,
    numberOfLines: 3,
    theme: 1,
    category: 0,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-erectionfille.jpg"),
    title: 'Je bande, tu bandes, il et elle bandent ?',
    text: 'Le pénis et le clitoris sont constitués des mêmes éléments. Lors de l\'excitation, ils se gorgent de sang, gonflent et durcissent de la même manière. La différence entre un clitoris au repos et en érection est flagrante ! Jettes y un coup d\'oeil ;)'
  },
  {
    key: 35,
    id: 35,
    numberOfLines: 3,
    theme: 1,
    category: 0,
    picture: require("../../assets/pictures/contents/ETS-photocontenu-vaginisme.jpg"),
    title: 'Trop petit mon/ton vagin ?',
    text: 'Le vagin ne peut pas être trop petit car il s\u0092adapte à toutes les tailles. Si on ressent une douleur ou si la pénétration est impossible, c\'est souvent lié à la contraction des muscles du vagin ou au manque de lubrification naturelle. Ça peut venir du stress, de la peur, ou du manque de stimulation (du coup pas assez de mouille!).'
  },
  {
    key: 36,
    id: 36,
    numberOfLines: 3,
    theme: 1,
    category: 0,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-peniscourbe.jpg"),
    title: 'C\'est quoi la courbe parfaite d\'un pénis en érection ?',
    text: 'Le pénis peut être orienté vers le haut, vers le bas, vers la droite ou la gauche et c\'est normal. Il n\'existe pas de courbe parfaite ! Mais si la courbure du pénis en érection cause d\'une gêne voire d\'une impossibilité à la pénétration, il faut consulter un médecin. Cette particularité touche 3,4% à 9% des hommes.'
  },
  {
    key: 37,
    id: 37,
    numberOfLines: 3,
    theme: 1,
    category: 1,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-ejactorgasme.jpg"),
    title: 'Ejaculation = orgasme ?',
    text: 'Et bien non, voyons ! un orgasme est un plaisir sexuel intense. Il n\u0092est pas évident d\u0092expliquer ce qu\u0092est un orgasme car les sensations éprouvées dans tout le corps varient beaucoup d\u0092un individu à l\u0092autre, voire d\u0092un moment à l\u0092autre pour la même personne.\nUne éjaculation n\'est pas forcément associée à un plaisir intense mais souvent à un plaisir qui variera en fonction de lui, du ou de la partenaire ou de l\'environnement.'
  },
  {
    key: 38,
    id: 38,
    numberOfLines: 3,
    theme: 1,
    category: 1,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-orgasme.jpg"),
    title: 'Orgamse, c\'est quoi ?',
    text: 'C\'est un plaisir sexuel intense. Il n\u0092est pas évident d\u0092expliquer ce qu\u0092est un orgasme car les sensations éprouvées dans tout le corps varient beaucoup d\u0092un individu à l\u0092autre, voire d\u0092un moment à l\u0092autre pour la même personne.'
  },
  {
    key: 39,
    id: 39,
    numberOfLines: 3,
    theme: 1,
    category: 1,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-nocturne.jpg"),
    title: 'Pas d\'erection chez un garçon, ça veut dire pas d\'envie ?',
    text: 'La relation qui se noue entre erection, envie, désir est beaucoup plus complexe que ça. Chez l\'homme, il peut y avoir des pannes d\'érection qui n\'ont rien à voir avec l\'excitation ou l\'envie d\'avoir des rapports. Le stress, l\'anxiété ou la fatigue peuvent parfois expliquer ces "pannes". Si elles persistent, ne pas hésiter à contacter un médecin : il saura orienter :)'
  },
  {
    key: 40,
    id: 40,
    numberOfLines: 3,
    theme: 1,
    category: 1,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-mouille.jpg"),
    title: 'Mouiller chez une fille ça veut dire avoir envie de faire l\'amour ?',
    text: 'Si une fille "mouille", cela ne veut pas dire qu\'elle a absolument envie de faire l\'amour ou qu\'elle aime ça. À l\'inverse, elle peut avoir du désir sans mouiller tout de suite. Le mieux c\'est quand même de communiquer pour savoir :)'
  },
  {
    key: 41,
    id: 41,
    numberOfLines: 3,
    theme: 1,
    category: 1,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-virginite.jpg"),
    title: 'La virginité ne se perd qu\'avec une pénétration ?',
    text: 'Une personne dite vierge est une personne qui n\'a pas connu de rapport sexuel. Or, un rapport sexuel ne veut pas forcement dire pénétration : une fellation, un cunnilingus ou une pénétration anale sont aussi considérés comme des rapports sexuels.'
  },
  {
    key: 42,
    id: 42,
    numberOfLines: 3,
    theme: 1,
    category: 1,
    picture: require("../../assets/pictures/contents/ETS-photocontenu-samedi.jpg"),
    title: 'Plus c\'est long, plus c\'est bon ?',
    text: 'Si une relation sexuelle dure en moyenne 25 minutes, la pénétration elle ne dure que 5 minutes, ce qui explique l\'importance de tout ce qui se passe avant (qu\'on appelle souvent préliminaires) et même après ;).'
  },
  {
    key: 43,
    id: 43,
    numberOfLines: 3,
    theme: 1,
    category: 1,
    picture: require("../../assets/pictures/contents/ETS-photocontenu-vaginisme.jpg"),
    title: 'C\'est quoi le rapport entre l\'hymen et la viriginité ?',
    text: 'Il n\'y a aucun rapport entre l\'hymen et la viriginité. L\'hymen est une membrane qui n\'a pas de fonction particulière. Il n\'est pas rare de naître sans hymen ou que ce dernier se soit déjà atrophié avant le premier rapport. Il est aussi possible que certaines femmes gardent leur hymen intact même après avoir accouché.'
  },
  {
    key: 44,
    id: 44,
    numberOfLines: 3,
    theme: 1,
    category: 1,
    picture: require("../../assets/pictures/contents/ETS-photocontenu-payant.jpg"),
    title: 'Un préservatif peut être réutilisé ?',
    text: 'Les préservatifs sont à usage unique. On l\'utilise une seule foiiiiiiis, pas deux, pas trois. Il faut changer de préservatif à chaque rapport, que ce soit avec le même partenaire ou un partenaire différent. Utiliser le même préservatif peut occasionner des frictions et des déchirures. S\'il est déjà déroulé, impossible de le remettre.'
  },
  {
    key: 45,
    id: 45,
    numberOfLines: 3,
    theme: 1,
    category: 1,
    picture: require("../../assets/pictures/contents/ETS-photocontenu-preservatifs.jpg"),
    title: 'Les préservatifs internes, c\'est quoi ?',
    text: 'Les préservatifs internes (dit "féminin") sont une gaine en nitrile ou en polyuréthane munie d\u0092un anneau souple aux deux extrémités. Il se place dans le vagin ou l\'anus. Il peut être mis en place plusieurs heures avant le rapport sexuel ou juste avant. Il faut le changer à chaque rapport sexuel et entre chaque pénétration : on ne l\'utilise qu\'une seule fois !'
  },
  {
    key: 46,
    id: 46,
    numberOfLines: 3,
    theme: 1,
    category: 1,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-ejactorgasme.jpg"),
    title: 'C\'est quoi une éjaculation précoce ?',
    text: 'On parle d\'éjaculation précoce lorsque l\'ejaculation survient trop vite chez le garçon. Il n\u0092y a pas de durée précise mais on en parle quand elle laisse la personne insatisfaite, avec la sensation qu\u0092elle n\u0092a aucun contrôle. Certaines situations (conflits avec son\u0095sa partenaire ou autre) créent une tension et empêchent de se détendre. Pas de honte, pas de panique : ça arrive.'
  },
  {
    key: 47,
    id: 47,
    numberOfLines: 3,
    theme: 1,
    category: 1,
    picture: require("../../assets/pictures/contents/ETS-photocontenu-payant.jpg"),
    title: 'Où trouver des préservatifs gratuitement ?',
    text: 'Les préservatifs peuvent être achetés en pharmacie et supermarché, mais ils peuvent également être distribués gratuitement en demandant une prescription au médecin ou en allant en chercher dans les Centres de Planification et d\'Education Familiale (CPEF) et Centres Gratuits d\'Information, de Dépistage et de Diagonistic (CeGIDD), ou les associations.'
  },
  {
    key: 48,
    id: 48,
    numberOfLines: 3,
    theme: 1,
    category: 1,
    picture: require("../../assets/pictures/contents/ETS-photocontenus-sodo.jpg"),
    title: 'Gay = Sodomie ?',
    text: 'Le fait d\'être gay, n\'implique pas forcément de devoir pratiquer la sodomie si on en a pas envie. Il n\'y a pas de modèle à suivre sinon celui du consentement. C\'est à dire que personne, quel que soit son sexe ou son orientation sexuelle, ne doit se forcer à faire quelque chose qu\'il ne souhaite pas faire. Si on ne souhaite pas avoir de pénétration anale, on en a tout à fait le droit. Et le partenaire ne peut pas forcer ni obliger, sous quelque prétexte que ce soit.'
  },
  {
    key: 49,
    id: 49,
    numberOfLines: 3,
    theme: 1,
    category: 1,
    picture: require("../../assets/pictures/contents/ETS-photocontenu-fouamoureux.jpg"),
    title: 'Amour et première fois ?',
    text: 'L\u0092amour et la sexualité ne sont pas toujours liés. On peut désirer une personne et avoir envie d\u0092un rapport sexuel sans être amoureux-se. On peut aussi aimer énormement quelqu\u0092un mais ne pas avoir envie d\u0092être intime avec lui\u0095elle. L\u0092essentiel pour sa première fois, et toutes les autres, c\u0092est que les deux partenaires en aient envie.'
  },
  {
    key: 50,
    id: 50,
    numberOfLines: 3,
    theme: 1,
    category: 2,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-taillepenis.jpg"),
    title: 'Montre moi tes mains, je te dirais la taille de ton pénis',
    text: 'La taille des mains ou des pieds ne donne évidement aucune idée de la taille de son sexe. La seule façon de connaître la taille c\u0092est de mesurer le pénis en érection entre le bas du ventre et le bout du gland. La taille moyenne du pénis en érection est de 13 cm. Et pour le plaisir, ce n\'est pas la taille qui compte ;)'
  },
  {
    key: 51,
    id: 51,
    numberOfLines: 3,
    theme: 1,
    category: 2,
    picture: require("../../assets/pictures/contents/ETS-photocontenu-samedi.jpg"),
    title: 'Il se passe quoi les samedi à 19h ?',
    text: 'Il semblerair que 44% des couples feraient le plus souvent l\'amour le samedi à 19h, juste avant de sortir en soirée. Mais chacun ses habitudes ;)'
  },
  {
    key: 52,
    id: 52,
    numberOfLines: 3,
    theme: 1,
    category: 2,
    picture: require("../../assets/pictures/contents/ETS-photocontenu-paternaire.jpg"),
    title: 'Mecs, meufs : qui a le plus de partenaires ?',
    text: 'Chez les hétéro, les hommes déclareraient tous leurs partenaires, alors que les femmes ne déclareraient que les partenaires qui ont compté pour elles. Mais au total, vraisemblablement, hommes ou femmes, quelque soit l\'orientation sexuelle... chacun\u0095e fait ce qu\'il veut (dans le respect du consentement, bien sûr!).'
  },
  {
    key: 53,
    id: 53,
    numberOfLines: 3,
    theme: 1,
    category: 3,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-sida.jpg"),
    title: 'Le dépistage du VIH/SIDA se fait seulement à l\'hopital ?',
    text: 'On peut faire un dépistage sans prescription ni passer par l\'hôpital. C\'est possible d\'en faire dans les CeGIDD, dans certains centres de planification familiale ou dans un laboratoire de biologie médicale (avec ou sans ordonnance). On peut aussi faire un dépistage soi-même avec un auto-test acheté en pharmacie ou dans certaines associations avec un TROD.'
  },
  {
    key: 54,
    id: 54,
    numberOfLines: 3,
    theme: 2,
    category: 0,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-erectionfille.jpg"),
    title: 'Je bande, tu bandes, il et elle bandent ?',
    text: 'Le pénis et le clitoris sont constitués des mêmes éléments. Lors de l\'excitation, ils se gorgent de sang, gonflent et durcissent de la même manière. On peut alors dire que le clito et que le pénis bandent. D\'ailleurs la différence entre un clitoris au repos et en érection est flagrante ! Jettes y un coup d\'oeil ;)'
  },
  {
    key: 55,
    id: 55,
    numberOfLines: 3,
    theme: 2,
    category: 0,
    picture: require("../../assets/pictures/contents/ETS-photocontenu-ejacfeminine.jpg"),
    title: 'Une fille peut éjaculer ?',
    text: 'On parle parfois de « femmes fontaines » (mais l\'éjaculation féminine n\'est pas forcément aussi abondante que dans les films.) L\'éjaculation féminine, ce n\u0092est pas de l\u0092urine. La couleur, l\u0092odeur sont différentes (et le goût aussi aha!). Pourtant, le liquide sort un peu de la même manière. Chez certaines, cela se manifeste à chaque orgasme. Chez d\u0092autres, cela arrive de temps en temps, voire occasionnellement, ou pas du tout.'
  },
  {
    key: 56,
    id: 56,
    numberOfLines: 3,
    theme: 2,
    category: 0,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-huile.jpg"),
    title: 'Cyprine, c\'est quoi ?',
    text: 'La cyprine c\'est l\'autre petit nom de la mouille. C\'est le lubrifiant naturel du vagin qui facilite la pénétration lors d\u0092un rapport sexuel. Par contre, quand on utilise un préservatif masculin / externe, il faut ajouter du lubrifant, ça change la vie (en vrai, ça diminue les risques de rupture et augmente les sensations donc tout bénéf\'!)'
  },
  {
    key: 57,
    id: 57,
    numberOfLines: 3,
    theme: 2,
    category: 0,
    picture: require("../../assets/pictures/contents/ETS-photocontenu-vaginisme.jpg"),
    title: 'Le vaginisme, c\'est quoi ?',
    text: 'Le vaginisme désigne une contraction involontaire des muscles qui entourent le vagin rendant la pénétration impossible. Le pénis ne peut pas entrer et si on force, on peut ressentir alors de vives douleurs. Le mieux est d\'en parler avec son médecin.'
  },
  {
    key: 58,
    id: 58,
    numberOfLines: 3,
    theme: 2,
    category: 0,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-erectionfille.jpg"),
    title: 'C\'est normal d\'avoir les petites lèvres plus longues que les longues lèves ?',
    text: 'Tout est normal ! Selon les filles, les lèvres du sexe sont plus ou moins grandes, peuvent être asymétriques et de couleurs assez variées, du rose clair au marron plus ou moins foncé. Toutes les vulves sont belles, chacune à sa façon.'
  },
  {
    key: 59,
    id: 59,
    numberOfLines: 3,
    theme: 2,
    category: 1,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-orgasme.jpg"),
    title: 'Orgasme = jouissance ?',
    text: 'Jouir n\'est pas orgasmer. La jouissance est un plaisir ressenti dans son corps. L\'orgasme est une jouissance intense qui fait perdre la perception des sens. La meilleure façon d\'avoir un orgasme c\'est de ne pas en faire une obsession ! Explorer sans se prendre la tête et se laisser aller.'
  },
  {
    key: 60,
    id: 60,
    numberOfLines: 3,
    theme: 2,
    category: 1,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-orgasme.jpg"),
    title: 'Orgasmes multiples, c\'est quoi ?',
    text: 'La plupart des femmes peuvent ressentir des orgasmes successifs. On les appelle orgasmes multiples. Alors que les hommes, après un orgasme, ont besoin d\'une période réfractaire plus ou moins longue : en gros, pendant ce temps, il aura du mal à bander. De toute façon, restons attentifs aux envies de nos partenaires même après avoir joui!'
  },
  {
    key: 61,
    id: 61,
    numberOfLines: 3,
    theme: 2,
    category: 1,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-huile.jpg"),
    title: 'Ne pas mouiller chez une fille ça veut dire ne pas avoir envie de faire l\'amour ?',
    text: 'Chez la femme, cela peut prendre un peu de temps avant que la lubrification soit optimale. Elle peut avoir du désir sans mouiller tout de suite. Inversement, si une fille "mouille", cela ne veut pas non plus dire qu\'elle a absolument envie de faire l\'amour ou qu\'elle aime ça. Le mieux c\'est quand même de communiquer pour savoir :)'
  },
  {
    key: 62,
    id: 62,
    numberOfLines: 3,
    theme: 2,
    category: 1,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-trans.jpg"),
    title: 'Être pansexuel\u0095le, ça veut dire quoi ?',
    text: 'Être pansexuel\u0095le est le fait d\'être attiré\u0095e, sexuellement ou sentimentalement, par les personnes indifféremment de leur sexe, de leur genre ou de leur orientation. Les bisexuel\u0095les s\'intéressent à la fois aux hommes et aux femmes. Les pansexuel\u0095les eux sont attirés par les hommes, les femmes, les transgenres, etc.'
  },
  {
    key: 63,
    id: 63,
    numberOfLines: 3,
    theme: 2,
    category: 1,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-huile.jpg"),
    title: 'L\'huile peut servir de lubrifiant ?',
    text: 'L\'huile, ce n\'est pas du lubirifiant ! Avec le préservatif, il est nécessaire d\'utiliser des lubrifiants (des gels à base d\'eau ou de silicone). Attention, l\'utilisation d\'huiles, de beurres, de crèmes peuvent irriter les parties génitales, fragiliser le préservatif... et du coup, le faire craquer, voire même le dissoudre.'
  },
  {
    key: 64,
    id: 64,
    numberOfLines: 3,
    theme: 2,
    category: 1,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-trans.jpg"),
    title: 'Être transsexuel, ça veut dire quoi ?',
    text: 'Etre trans, c\'est sentir que le sexe avec lequel on est né n\'est pas le bon. C\'est se sentir profondément fille alors que l\'on est né garçon, ou se sentir profondément garçon alors que l\'on est né en fille. A ne pas confondre avec le fait d\'être homosexuel qui est le fait d\'être attiré  (sexuelle ou sentimentale) pour une personne de son sexe.\nCe sont 2 choses différentes mais trop souvent confondues.'
  },
  {
    key: 65,
    id: 65,
    numberOfLines: 3,
    theme: 2,
    category: 1,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-externe.jpg"),
    title: 'Préservatif externe... c\'est quoi ?!',
    text: 'Il se déroule sur le pénis et est appelé préservatif externe ou « masculin ». Il existe en différentes tailles, effets ou matières (nervuré, ultra-fin, avec des goûts, latex ou pas). On peut l\'acheter en pharmacie, supermarché, sur Internet ou en avoir gratuitement dans certaines associations ou par ordonnance du médecin. Attention à vérifier la date de péremption !'
  },
  {
    key: 66,
    id: 66,
    numberOfLines: 3,
    theme: 2,
    category: 1,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-excite.jpg"),
    title: 'À quel moment on ne peut plus arrêter le rapport ?',
    text: 'On peut toujours arrêter si on ne veut plus, n\'importe quand. L\u0092excitation sexuelle n\u0092a jamais « de point de non-retour », elle finit toujours par retomber et ne crée aucune séquelle sur le corps. Arrêter un rapport qui a commencé peut cependant générer de la frustration qu\'il faut apprendre à gérer pour respecter la volonté du ou de la partenaire.'
  },
  {
    key: 67,
    id: 67,
    numberOfLines: 3,
    theme: 2,
    category: 1,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-orgasme.jpg"),
    title: 'C\'est quoi le fantasme le plus fréquent ?',
    text: 'Faire une fellation ou un cunnilingus fait partie des fantasmes habituels et fréquents. D\'autres fanstasmes fréquents incluent avoir des sentiments pour le ou la partenaire (eh ouais on vous voit les romantiques!), avoir des rapports dans un lieu qui sort de l\'ordinaire, les fessées, les sextos... À chacun\u0095e son imagination ;)'
  },
  {
    key: 68,
    id: 68,
    numberOfLines: 3,
    theme: 2,
    category: 2,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-erectionfille.jpg"),
    title: 'Un pet vaginal, c\'est quoi ?',
    text: 'Le pet vaginal, c\'est de l\'air qui sort du vagin. C\'est surprenant ! et parfois gênant... lorsqu\'on a un rapport. Le vagin n\u0092est pas en lien avec l\u0092appareil digestif. Le pet vaginal n\u0092a pas d\u0092odeur ;). Il survient lorsqu\u0092il y a eu une entrée d\u0092air dans le vagin lors d\u0092un rapport sexuel. Certaines positions le favorisent.'
  },
  {
    key: 69,
    id: 69,
    numberOfLines: 3,
    theme: 2,
    category: 2,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-ph.jpg"),
    title: 'Quel est le point commun entre un vagin et une bière ?',
    text: 'Le pH moyen d\'un vagin équilibré se situe entre 4 et 4,5, soit à peu près comme une bière. Santé !'
  },
  {
    key: 70,
    id: 70,
    numberOfLines: 3,
    theme: 2,
    category: 3,
    picture: require("../../assets/pictures/contents/ETS-photocontenu-couple.jpg"),
    title: 'Un couple est forcément consentant ?',
    text: 'Un couple n\'est pas une entité, il est composé de deux partenaires avec des envies parfait différentes. Un couple n\'est donc pas consentant par défaut. Le viol entre époux est possible (oui, c\'est dans le code pénal, article 222-22). Dans un couple marié on présume qu\'il y a consentement à l\u0092acte sexuel jusqu\u0092à preuve du contraire.'
  },
  {
    key: 71,
    id: 71,
    numberOfLines: 3,
    theme: 2,
    category: 3,
    picture: require("../../assets/pictures/contents/ETS-photocontenu-fraise.jpg"),
    title: 'On doit toujours finir ce que l\'on commence ?',
    text: 'Le consentement est donné pour un acte mais il peut à tout moment être retiré. Si on est au bord d\'avoir fini le rapport sexuel mais que le patenaire n\'en a plus envie, continuer le rapport sexuel est constitutif d\u0092un viol. Si un partenaire veut arrêter, à n\'importe quel moment, quelle que ce soit la raison, on arrête. En cas de violences sexuelles, on peut appeler le 3919 pour recevoir conseils, aide et information.'
  },
  {
    key: 72,
    id: 72,
    numberOfLines: 3,
    theme: 2,
    category: 3,
    picture: require("../../assets/pictures/contents/ETS-photocontenu-fraise.jpg"),
    title: 'Un oui bourré\u0095e = un oui sobre ?',
    text: 'Tous les oui, ne sont pas toujours des oui. Une personne peut consentir mais sans être en capacité de le faire en raison de son état d\u0092ébriété (parce qu\'elle est trop bourré.e). Dans ce cas, c\u0092est comme si il n\u0092y avait pas eu de consentement et le rapport est un viol. En cas de violences sexuelles, on peut appeler le 3919 pour recevoir conseils, aide et info.'
  },
  {
    key: 73,
    id: 73,
    numberOfLines: 3,
    theme: 2,
    category: 3,
    picture: require("../../assets/pictures/contents/ETS-photocontenu-consentement.jpg"),
    title: 'Si il y a orgasme, c\'est que le rapport était consenti ?',
    text: 'L\u0092orgasme peut être un moyen de défense adopté par le corps lors du rapport sexuel non consenti. Un orgasme n\'est donc en aucun cas la preuve d\'un rapport consentit. Si la personne avait dit "non" et même si elle a eu un orgasme, si elle a mouillé ou eu une erection, etc. c\'est considéré comme du viol. En cas de violences sexuelle, on peut appeler le 3919 pour recevoir conseils, aide et info.'
  },
  {
    key: 74,
    id: 74,
    numberOfLines: 3,
    theme: 2,
    category: 4,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-IST.jpg"),
    title: 'La syphilis, c\'est quoi ?',
    text: 'La syphilis est une infection bactérienne responsable de lésions de la peau et des muqueuses. Elle peut toucher de nombreux organes et favorise la transmission du VIH. Déspitée tôt, on peut la traiter efficacement par antibiotique chez la personne infectée et ses partenaires. Le port du préservatif (ou l\'usage d\'un carré de latex) permet de s\'en protéger. '
  },
  {
    key: 75,
    id: 75,
    numberOfLines: 3,
    theme: 2,
    category: 4,
    picture: require("../../assets/pictures/contents/ETS-photocontenu-sextoy.jpg"),
    title: 'Sextoy et preservatif, it\'s a match ?',
    text: 'Si on utilise un ou des sex toys à plusieurs, il est important de mettre un préservatif par personne et par orifice. Il peut y avoir transmission d\'IST. Si on l\'utilise solo, on ne peut pas attraper d\'IST mais des microbes s\'il n\'est pas bien lavé. Mieux vaut se laver après chaque usage, à l\'eau et au savon. Et faire la même chose pour ses mains :)'
  },
  {
    key: 76,
    id: 76,
    numberOfLines: 3,
    theme: 2,
    category: 4,
    picture: require("../../assets/pictures/contents/ETS-photocontenu-traitement.jpg"),
    title: 'TPE, c\'est quoi ?',
    text: 'Si on pense avoir été exposé.e au VIH, on peut prendre un traitement qui empêche la multiplication du virus. Ce traitement, appelé TPE (traitement post-exposition), doit être pris le plus tôt possible, dans les 48h après la prise de risque, pour diminuer la probabilité d\u0092une contamination. On le trouve aux urgences de l\'hôpital ou en CeGIDD.'
  },
  {
    key: 77,
    id: 77,
    numberOfLines: 3,
    theme: 2,
    category: 4,
    picture: require("../../assets/pictures/contents/ETS-photocontenu-herpes.jpg"),
    title: 'Herpès génital, tous touchés ?',
    text: 'Environ 2 millions de personnes sont touchées par l\'herpès génital en France. Il peut rester endormi pendant des années puis apparaître plus tard. Il est très contagieux pendant les poussées qui se manifestent par des picotements, des vésicules, des brûlures, des blessures près des organes génitaux. Un traitement existe pour empêcher les poussées.'
  },
  {
    key: 78,
    id: 78,
    numberOfLines: 3,
    theme: 2,
    category: 4,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-sida.jpg"),
    title: 'Un TROD, c\'est quoi ?',
    text: 'Le test rapide d\'orientation diagnostique (TROD) est anonyme et gratuit. Il est proposé par des associations habilitées au dépistage. Avec une goutte de sang recueillie au bout du doigt, le TROD permet d\u0092obtenir un résultat en 30 min. Attention : son résultat est valable 3 mois après la dernière prise du risque.'
  },
  {
    key: 79,
    id: 79,
    numberOfLines: 3,
    theme: 2,
    category: 4,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-IST.jpg"),
    title: 'IST, on en parle à ses anciens partenaires ?',
    text: 'En plus de symptômes qui peuvent désagréables, les IST peuvent entraîner des complications comme la stérilité, le cancer du col de l\'utérus, et autre. Elles ne se guérissent pas toutes seules et nécessitent un traitement. Il faut prévenir ses partenaires afin qu\'ils puissent se faire dépister, se soigner si besoin et ne pas contaminer d\'autres personnes.'
  },
  {
    key: 80,
    id: 80,
    numberOfLines: 3,
    theme: 2,
    category: 4,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-IST.jpg"),
    title: 'Comment ça se transmet le HPV ?',
    text: 'Contrairement au VIH, il ne se transmet pas par le sang. Le HPV peut se transmettre lors de rapports sexuels ou par contacts directs peau à peau (se toucher, s\u0092embrasser). Il est contagieux et fréquent. Le plus souvent, nos défenses l\'éliminent seules. Mais il peut parfois créer des lésions (condylomes). Le mieux, c\'est de consulter un médecin en cas de doute ;)'
  },
  {
    key: 81,
    id: 81,
    numberOfLines: 3,
    theme: 2,
    category: 4,
    picture: require("../../assets/pictures/contents/ETS-photocontenu-herpes.jpg"),
    title: 'Les chlamydia peuvent rendre stérile ?',
    text: 'Une infection à chlamydia non soignée peut provoquer la stérilité chez les femmes ET les hommes. C\u0092est l\u0092IST la plus fréquente chez les jeunes et est souvent sans symptômes, d\'où l\'importance du dépistage (eh ouaaais!). Pas de panique, détectée tôt, le traitement est efficace (à faire chez les deux partenaires). Elle se transmet lors de rapports non protégés.'
  },
  {
    key: 82,
    id: 82,
    numberOfLines: 3,
    theme: 2,
    category: 4,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-enceinte.jpg"),
    title: 'Une IVG, c\'est quoi ?',
    text: 'Une IVG est une Interruption Volontaire de Grossesse. Quand une fille est enceinte et ne souhaite pas poursuivre sa grossesse, elle peut y avoir recours à condition de respecter les délais. En France les IVG sont autorisées jusqu\'à 12 semaines de grossesse. Elles sont pratiquées gratuitement pour les mineures et pris en charge à 100% pour les majeures (et dans le cadre du secret médical).'
  },
  {
    key: 83,
    id: 83,
    numberOfLines: 3,
    theme: 2,
    category: 4,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-poils.jpg"),
    title: 'S\'épiler, c\'est plus hygiénique ?',
    text: 'S\'épiler est un choix personnel et ce n\'est pas forcément plus hygiénique. En fait, l\'hygiène n\'a rien à voir avec les poils. Les poils ne protègent pas contre les infections sexuellement transmissibles. En dehors de l\'hygiène intime, de ton corps, de tes mains, qui sont recommandées : chacun fait ce qu\'il veut avec ses poils !'
  },
  {
    key: 84,
    id: 84,
    numberOfLines: 3,
    theme: 2,
    category: 4,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-externe.jpg"),
    title: '1 préservatif interne + 1 préservatif externe = 2x plus de protection ?',
    text: 'Il ne faut jamais utiliser 2 preservatifs en même temps que ce soit un ou deux préservatifs exterrne ("masculin") et un préservatif interne ("féminin") en même temps. Ça risquerait de les déchirer. Petite astuce pour le préservatif interne : bien frotter l\'emballage entre les mains avant de l\u0092ouvrir pour bien répartir le lubrifiant.'
  },
  {
    key: 85,
    id: 85,
    numberOfLines: 3,
    theme: 2,
    category: 4,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-enceinte.jpg"),
    title: 'Si pas d\'éjaculation, pas de risque de grossesse ?',
    text: 'A l\u0092état naturel, le liquide pré-séminal ne contient pas de spermatozoïdes. MAIS, il peut entraîner avec lui des spermatozoïdes qui étaient présents dans l\u0092urètre après une précédente éjaculation. De ce fait, une pénétration, même sans éjaculation peut parfois entraîner une grossesse.'
  },
  {
    key: 86,
    id: 86,
    numberOfLines: 3,
    theme: 2,
    category: 4,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-kama.jpg"),
    title: 'Une pénétration anale, vaginale puis bucale, c\'est ok ?',
    text: 'Rien n\'empêche d\'avoir plusieurs pratiques sexuelles d\'affilées si l\'envie est présente. Mais il faut toujours utiliser un préservatif et le changer pour chaque type de pénétration, même s\'il n\'y a pas eu d\'éjaculation, même si c\'est avec le même partenaire, même si on utilise un sex toy. Sinon, on risque IST ou germes fécaux donc, on évite.'
  },
  {
    key: 87,
    id: 87,
    numberOfLines: 3,
    theme: 2,
    category: 4,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-IST.jpg"),
    title: 'La chaude pisse et la chtouille, c\'est quoi ?',
    text: 'La chaude pisse, la chtouille les autres noms de la blennorragie. La blennorragie est une infection d\u0092origine bactérienne. Elle provoque des brûlures ou un écoulement jaune par la verge, le vagin ou l\'anus. Cette infection se transmet lors de rapports sexuels, bucco-génitaux (bouche-parties génitales), vaginaux ou anaux. Un traitement par antibiotiques permet une guérison rapide.'
  },
  {
    key: 88,
    id: 88,
    numberOfLines: 3,
    theme: 2,
    category: 4,
    picture: require("../../assets/pictures/contents/DTC-photocontenu-IST.jpg"),
    title: 'Deux filles qui font l\'amour n\'ont pas de risque d\'attraper des IST ?',
    text: 'La majorité des IST se contracte par un échange de fluides entre partenaires. Les femmes ayant des rapports lesbiens peuvent transmettre ou contracter des IST à travers les échanges de cyprine, via des frottements génitaux ou via des pénétrations avec des doigts ou objets non protégés et partagés.'
  },
  {
    key: 89,
    id: 89,
    numberOfLines: 3,
    theme: 2,
    category: 4,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-regles.jpg"),
    title: 'Rêgles, sexe et grossesse, c\'est ok ?',
    text: 'il n\'y a aucun problème hygiénique à faire l\'amour lorsque l\'on a ses règles. Il arrive même parfois que le flux s\'ammenuise lors du rapport. On peut aussi faire l\'amour sans pénétration vaginale si on préfère ;) ou ne pas le faire du tout si on ne se sent pas à l\'aise. C\'est une décision à prendre ensemble.Par contre faire l\'amour lorsque l\'on a ses rêgles ne veut pas dire qu\'il n\'y a aucun risque de tomber enseinte.\nLes saignements ne sont pas favorables aux spermatozoïdes mais il n\'est pas impossible d\'être enceinte à la suite. L\'ovulation peut se déclencher très tôt après les règles et les spermatozoïdes ont une durée de vie de quelques jours : donc, c\'est possible d\'être enceinte suite à des rapports pendant les règles (sauf si on a un moyen de contraception)'
  },
  {
    key: 90,
    id: 90,
    numberOfLines: 3,
    theme: 2,
    category: 4,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-sida.jpg"),
    title: 'Le dépistage du VIH/SIDA se fait seulement à l\'hopital ?',
    text: 'On peut faire un dépistage sans prescription ni passer par l\'hôpital. C\'est possible d\'en faire dans les CeGIDD, dans certains centres de planification familiale ou dans un laboratoire de biologie médicale (avec ou sans ordonnance). On peut aussi faire un dépistage soi-même avec un auto-test acheté en pharmacie ou dans certaines associations avec un TROD.'
  },
  {
    key: 91,
    id: 91,
    numberOfLines: 3,
    theme: 2,
    category: 4,
    picture: require("../../assets/pictures/contents/LPF-photocontenu-sida.jpg"),
    title: 'VIH = SIDA ?',
    text: 'Le VIH (Virus de l\'Immunodéficience Humaine) attaque nos défenses. Au fil du temps, peuvent apparaitre des maladies de plus en plus graves qu\'on appelle le SIDA (Syndrome d\'Immuno Déficience Acquis). Une personne qui a le SIDA a forcément le VIH. Toutes les personnes infectées par le VIH n\u0092ont pas forcément développé le SIDA.'
  }
];

export default contents;
