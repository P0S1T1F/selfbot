/**
██████╗ ███████╗██████╗  ██████╗ ██╗  ██╗██╗   ██╗    ██╗   ██╗ ██████╗    ███████╗
██╔══██╗██╔════╝██╔══██╗██╔═══██╗██║ ██╔╝██║   ██║    ██║   ██║██╔═████╗   ██╔════╝
██║  ██║█████╗  ██████╔╝██║   ██║█████╔╝ ██║   ██║    ██║   ██║██║██╔██║   ███████╗
██║  ██║██╔══╝  ██╔══██╗██║   ██║██╔═██╗ ██║   ██║    ╚██╗ ██╔╝████╔╝██║   ╚════██║
██████╔╝███████╗██║  ██║╚██████╔╝██║  ██╗╚██████╔╝     ╚████╔╝ ╚██████╔╝██╗███████║
╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝       ╚═══╝   ╚═════╝ ╚═╝╚══════╝
 */

 /**
██╗███╗   ██╗███████╗████████╗██████╗ ██╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
██║████╗  ██║██╔════╝╚══██╔══╝██╔══██╗██║   ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
██║██╔██╗ ██║███████╗   ██║   ██████╔╝██║   ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
██║██║╚██╗██║╚════██║   ██║   ██╔══██╗██║   ██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
██║██║ ╚████║███████║   ██║   ██║  ██║╚██████╔╝╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝  ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝

 1. Remplir les champs ci-dessous en laissant les guillemets
 2. ouvrir cmd dans le dossier et faire node index.js
 3. Après que le script ait installé les dépendances, relancer le index avec node index
 4. Profitez du selfbot!!

 Note: les dépendances s'installent toutes seules au premier démmarage.

*/

/**
 ██████╗ ██████╗ ███╗   ██╗███████╗██╗ ██████╗ ██╗   ██╗██████╗  █████╗ ████████╗██╗ ██████╗ ███╗   ██╗
██╔════╝██╔═══██╗████╗  ██║██╔════╝██║██╔════╝ ██║   ██║██╔══██╗██╔══██╗╚══██╔══╝██║██╔═══██╗████╗  ██║
██║     ██║   ██║██╔██╗ ██║█████╗  ██║██║  ███╗██║   ██║██████╔╝███████║   ██║   ██║██║   ██║██╔██╗ ██║
██║     ██║   ██║██║╚██╗██║██╔══╝  ██║██║   ██║██║   ██║██╔══██╗██╔══██║   ██║   ██║██║   ██║██║╚██╗██║
╚██████╗╚██████╔╝██║ ╚████║██║     ██║╚██████╔╝╚██████╔╝██║  ██║██║  ██║   ██║   ██║╚██████╔╝██║ ╚████║
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝     ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝

 */

const token = ""//ton token
const prefix = "/"//ton prefix
const premium = "" //ton code premium si tu en as un. notez que les clés ne sont pas partageable et résulteront à l'effacement de ces dernières.

/**
███████╗ █████╗  ██████╗ 
██╔════╝██╔══██╗██╔═══██╗
█████╗  ███████║██║   ██║
██╔══╝  ██╔══██║██║▄▄ ██║
██║     ██║  ██║╚██████╔╝
╚═╝     ╚═╝  ╚═╝ ╚══▀▀═╝ 

 Q: Pourquoi avoir obfusquer le code?
 R: Car nous ne voulons pas que le code soit publique et que tout le monde puisse l'intégrer à son bot ou son selfbot. 
 Aussi car les commandes premium sont inclusent mais se débloquent uniquement si le code est valable. 
 Sinon, il serait hyper facile de s'attribuer le premium sans code valide.
 
 Q: Est-ce que je peux partager mon code premium?
 R: Oui et non. tant que c'est vos comptes, oui mais si c'est pour donner à tout discord, c'est non et votre clé sera supprimé.

 Q: Si j'ai le premium de la première version, est-ce que je le garde quand il y a une mise à jour du bot?
 R: Oui, bien sûr. Nous estimons que ceci est une nécessité et que nous ne devrions pas payer plusieurs fois.

 Q: J'ai acheté un code chez quelqu'un d'autre pour moins cher. Je me suis fais arnaquer, que puis-je faire?
 R: Nous ne pouvons rien pour vous. Il faut acheter son code chez jeanouina (allez me mp depuis le serveur deroku) UNIQUEMENT.

 Q: Comment puis-je faire en sorte que le selfbot soit allumé 24h/24h 7j/7j ?
 R: Nous proposons des solutions d'hebergement. Elle sont de 3€/mois. 
 Pour tout hébergement nodejs, veuillez contacter ๖̶̶̶ζJeanOUINAζ͜͡ 𝙈𝙉𝑳͜͡ζ𝐎𝐬𝐦𝐨𝐙ȺƐƓ#6666 ou alors aller sur https://discord.gg/JMzey6.
 Sinon, vous pouvez prendre un hébergement chez d'autre site comme evennode ou heroku voir glitch.io.

 Q: Est-ce que mon token est envoyé quelque part?
 R: Non, nous n'envoyons rien. comme nous l'avons dit plus haut, nous n'avons pas obfusquer notre selfbot pas pour grabber les tokens mais plutôt pour préserver notre code.

 Q: qu'est-ce qui est donc envoyé?
 R: Nous envoyons juste le code premium si vous avez remplis le champs et nous faisons une requete pour savoir si le bot a des mises à jour.

 Q: Si je veux acheter le premium, où dois-je me tourner et chez qui?
 R: Il faut mp ๖̶̶̶ζJeanOUINAζ͜͡ 𝙈𝙉𝑳͜͡ζ𝐎𝐬𝐦𝐨𝐙ȺƐƓ#6666 ou alors aller sur https://discord.gg/JMzey6.
 */


 //Les 7 lignes ci-dessous sont pour l'utilisation de vos informations fournies plus haut dans le selfbot. veuillez ne pas modifier ces prochaines lignes.

module.exports = {//NE PAS TOUCHER
    token,        //NE PAS TOUCHER
    prefix,       //NE PAS TOUCHER
    premium       //NE PAS TOUCHER
}                 //NE PAS TOUCHER