'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-28 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-810';
    this._commitGIT = 'b1a91c906562bf83191f8649327c95110d2ad4a2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}