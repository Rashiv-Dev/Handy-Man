const sequelize = require('../config/connection');
const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Nunc rhoncus dui vel sem.',
    customeremail: 'yabadab@somesite.com'
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    customeremail: 'satcat@gmail.com'
  },
  {
    comment_text: 'Aliquam erat volutpat. In congue.',
    customeremail: 'maskcat@gmail.com'
  },
  {
    comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    customeremail: 'packckat@gmail.com'
  },
  {
    comment_text: 'In hac habitasse platea dictumst.',
    customeremail: 'pink_lemon34@gmail.com'
  },
  {
    comment_text: 'Vivamus vestibulum sagittis sapien.',
    customeremail: 'sashgt67@monster.com'
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    customeremail: 'sashabcohen@gmail.com'
  },
  {
    comment_text: 'Sed vel enim sit amet nunc viverra dapibus.',
    customeremail: 'kiarra_harvey67@gmail.com'
  },
  {
    comment_text: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    customeremail: 'laverne27@hotmail.com'
  },
  {
    comment_text: 'Morbi a ipsum.',
    customeremail: 'linda_collins74@yahoo.com'
  },
  {
    comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    customeremail: 'claudine_harvey74@yahoo.com'
  },
  {
    comment_text: 'Donec ut mauris eget massa tempor convallis.',
    customeremail: 'albin_daniel@hotmail.com'
  },
  {
    comment_text: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    customeremail: 'kasandra.kshlerin@gmail.com'
  },
  {
    comment_text:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    customeremail: 'flavie_breitenberg@hotmail.com'
  },
  {
    comment_text: 'Quisque porta volutpat erat.',
    customeremail: 'gwen49@yahoo.com'
  },
  {
    comment_text: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    customeremail: 'smakcski78@gmail.com'
  },
  {
    comment_text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    customeremail: 'magali_schuster79@yahoo.com'
  },
  {
    comment_text: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    customeremail: 'dallin.dooley@gmail.com'
  },
  {
    comment_text:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    customeremail: 'crawford_mitchell@hotmail.com'
  },
  {
    comment_text:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    customeremail: 'domenico.zulauf@hotmail.com'
  },
  {
    comment_text: 'Curabitur convallis.',
    customeremail: 'triston31@gmail.com'
  },
  {
    comment_text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    customeremail: 'caden_dickinson25@gmail.com'
  },
  {
    comment_text: 'Morbi non quam nec dui luctus rutrum.',
    customeremail: 'hannah96@gmail.com'
  },
  {
    comment_text:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    customeremail: 'amir.simonis@gmail.com'
  },
  {
    comment_text:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    customeremail: 'luz70@gmail.com60'
  },
  {
    comment_text: 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    customeremail: 'america33@yahoo.com'
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    customeremail: 'zander.olson@hotmail.com'
  },
  {
    comment_text: 'Nam tristique tortor eu pede.',
    customeremail: 'charlene_willms@gmail.com'
  },
  {
    comment_text: 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
   customeremail: 'francesca_hettinger@yahoo.com'
  },
  {
    comment_text: 'Proin eu mi. Nulla ac enim.',
    customElements: 'darrin18@gmail.com'
  },
  {
    comment_text: 'Sed ante. Vivamus tortor.',
    customeremail: 'aileen32@yahoo.com'
  },
  {
    comment_text: 'Aliquam quis turpis eget elit sodales scelerisque.',
    customeremail: 'ettie17@gmail.com'
  },
  {
    comment_text: 'Donec quis orci eget orci vehicula condimentum.',
    customeremail: 'luz.howell62@gmail.com'
  },
  {
    comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    customeremail: 'ocie_hackett84@gmail.com'
  },
  {
    comment_text: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    customeremail: 'lloyd_hyatt@hotmail.com'
  },
  {
    comment_text: 'Maecenas ut massa quis augue luctus tincidunt.',
    customeremail: 'norris.oconner14@gmail.com'
  },
  {
    comment_text: 'Cras in purus eu magna vulputate luctus.',
    customeremail: 'johnpaul49@hotmail.com'
  },
  {
    comment_text: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
    customeremail: 'berniece0@yahoo.com'
  },
  {
    comment_text: 'Proin at turpis a pede posuere nonummy.',
    customeremail: 'davion.pagac@gmail.com'
  },
  {
    comment_text: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    customeremail: 'isaac_hessel7@hotmail.com'
  },
  {
    comment_text:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    customeremail: 'kaitlin17@yahoo.com'
  },
  {
    comment_text:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    customeremail: 'ricky47@hotmail.com'
  },
  {
    comment_text: 'Vestibulum ac est lacinia nisi venenatis tristique.',
   customeremail: 'ned.sauer71@hotmail.com'
  },
  {
    comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    customeremail: 'madie92@hotmail.com'
  },
  {
    comment_text:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    customeremail: 'jarrell_schroeder@gmail.com'
  },
  {
    comment_text: 'Integer ac leo. Pellentesque ultrices mattis odio.',
    customeremail: 'rogers97@yahoo.com'
  },
  {
    comment_text: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    customeremail: 'pablo_gorczany86@gmail.com'
  },
  {
    comment_text:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
   customeremail: 'nellie_ondricka@hotmail.com'
  },
  {
    comment_text: 'Proin risus. Praesent lectus.',
    customeremail: 'pierre68@hotmail.com'
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
   customeremail: 'sigrid_simonis94@yahoo.com'
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;