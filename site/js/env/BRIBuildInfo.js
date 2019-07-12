'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 12:33:07';
    this._versionBuild = 'jenkins-Bricolage-120';
    this._commitGIT = '2cf45ebc5438c0893932ccf3dc2fb33b37ac7303';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}