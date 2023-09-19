"use strict";

const gateways = [
  "https://ipfs.io/ipfs/",
  "https://dweb.link/ipfs/",
  "https://gateway.ipfs.io/ipfs/",
  "https://ninetailed.ninja/ipfs/",
  "https://via0.com/ipfs/",
  "https://ipfs.eternum.io/ipfs/",
  "https://hardbin.com/ipfs/",
  "https://cloudflare-ipfs.com/ipfs/",
  "https://astyanax.io/ipfs/",
  "https://cf-ipfs.com/ipfs/",
  "https://gateway.originprotocol.com/ipfs/",
  "https://gateway.pinata.cloud/ipfs/",
  "https://ipfs.sloppyta.co/ipfs/",
  "https://ipfs.busy.org/ipfs/",
  "https://ipfs.greyh.at/ipfs/",
  "https://gateway.serph.network/ipfs/",
  "https://gw3.io/ipfs/",
  "https://jorropo.net/ipfs/",
  "https://ipfs.fooock.com/ipfs/",
  "https://cdn.cwinfo.net/ipfs/",
  "https://aragon.ventures/ipfs/",
  "https://permaweb.io/ipfs/",
  "https://ipfs.best-practice.se/ipfs/",
  "https://storjipfs-gateway.com/ipfs/",
  "https://ipfs.runfission.com/ipfs/",
  "https://ipfs.trusti.id/ipfs/",
  "https://ipfs.overpi.com/ipfs/",
  "https://ipfs.ink/ipfs/",
  "https://ipfsgateway.makersplace.com/ipfs/",
  "https://ipfs.funnychain.co/ipfs/",
  "https://ipfs.telos.miami/ipfs/",
  "https://ipfs.mttk.net/ipfs/",
  "https://ipfs.fleek.co/ipfs/",
  "https://ipfs.jbb.one/ipfs/",
  "https://ipfs.yt/ipfs/",
  "https://hashnews.k1ic.com/ipfs/",
  "https://ipfs.drink.cafe/ipfs/",
  "https://ipfs.kavin.rocks/ipfs/",
  "https://ipfs.denarius.io/ipfs/",
  "https://crustwebsites.net/ipfs/",
  "https://ipfs0.sjc.cloudsigma.com/ipfs/",
  "http://ipfs.genenetwork.org/ipfs/",
  "https://ipfs.eth.aragon.network/ipfs/",
  "https://ipfs.smartholdem.io/ipfs/",
  "https://ipfs.xoqq.ch/ipfs/",
  "http://natoboram.mynetgear.com:8080/ipfs/",
  "https://video.oneloveipfs.com/ipfs/",
  "https://ipfs.scalaproject.io/ipfs/",
  "https://search.ipfsgate.com/ipfs/",
  "https://ipfs.decoo.io/ipfs/",
  "https://alexdav.id/ipfs/",
  "https://ipfs.uploads.nu/ipfs/",
  "https://hub.textile.io/ipfs/",
  "https://ipfs1.pixura.io/ipfs/",
  "https://ravencoinipfs-gateway.com/ipfs/",
  "https://konubinix.eu/ipfs/",
  "https://ipfs.tubby.cloud/ipfs/",
  "https://ipfs.lain.la/ipfs/",
  "https://ipfs.kaleido.art/ipfs/",
  "https://ipfs.slang.cx/ipfs/",
  "https://ipfs.arching-kaos.com/ipfs/",
  "https://storry.tv/ipfs/",
  "https://ipfs.1-2.dev/ipfs/",
  "https://dweb.eu.org/ipfs/",
  "https://permaweb.eu.org/ipfs/",
  "https://ipfs.namebase.io/ipfs/",
  "https://ipfs.tribecap.co/ipfs/",
  "https://ipfs.kinematiks.com/ipfs/",
  "https://nftstorage.link/ipfs/",
  "https://gravity.jup.io/ipfs/",
  "http://fzdqwfb5ml56oadins5jpuhe6ki6bk33umri35p5kt2tue4fpws5efid.onion/ipfs/",
  "https://tth-ipfs.com/ipfs/",
  "https://ipfs.chisdealhd.co.uk/ipfs/",
  "https://ipfs.alloyxuast.tk/ipfs/",
  "https://4everland.io/ipfs/",
  "https://ipfs-gateway.cloud/ipfs/",
  "https://w3s.link/ipfs/",
  "https://cthd.icu/ipfs/",
  "https://ipfs.tayfundogdas.me/ipfs/",
  "https://ipfs.jpu.jp/ipfs/",
  "https://ipfs.soul-network.com/ipfs/",
];



function getGateway() {
  return new Promise((resolve, reject) => {
    gateways.forEach((element) => {
      const xhr = new XMLHttpRequest();
      xhr.timeout = 5000;
      xhr.open("GET", element + "bafybeifx7yeb55armcsxwwitkymga5xf53dxiarykms3ygqic223w5sk3m", true);

      xhr.onload = () => {
        resolve(element);
      };

      xhr.send();

    });
  });
}

function getGateways() {
  let tempGateways=[]
  return new Promise((resolve, reject) => {
    gateways.forEach((element) => {
      const xhr = new XMLHttpRequest();
      xhr.timeout = 5000;
      xhr.open("GET", element + "bafybeifx7yeb55armcsxwwitkymga5xf53dxiarykms3ygqic223w5sk3m", true);

      xhr.onload = () => {
        tempGateways.push(element);
      };

      xhr.send();

    });
    resolve(tempGateways);
  });
}
