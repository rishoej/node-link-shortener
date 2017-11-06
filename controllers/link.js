// Models
const Link = require('./../models/Link');

// Utilities
const validUrl = require('./../util/validUrl');

/* Handle GET requests */
exports.createShortLink = function(req, res) {
  const linkOriginal = req.params[0];
  let response;

  if(validUrl(linkOriginal)){

    console.log(linkExist(linkOriginal))
    if(linkExist(linkOriginal)) {
      const dbLink = linkExist(linkOriginal);
      res.send({
        original_link: link.original_link,
        short_link: req.hostname + '/' + link.short_link
      });
    } 

    const link = new Link({
      original_link: linkOriginal
    });
    link.save((err) => {
      if (err) throw err;

      res.send({
        original_link: link.original_link,
        short_link: req.hostname + '/' + link.short_link
      });
    });

  } else {
    res.send({
      response: 'Not a valid url'
    });
  }
};


function linkExist(original_link) {
  Link.findOne({original_link: original_link}).exec((err, link) => {
    if (err) throw err;

    return true;
  });
}

function saveLink() {

}


exports.shortLinkRedirect = function(req, res) {
  const shortLink = req.params.short_link;

  Link.findOne({short_link: shortLink}).exec((err, link) => {
    if (err) throw err;

    return res.redirect(link.original_link);
  });
}
