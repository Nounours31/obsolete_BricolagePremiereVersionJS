'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-07 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-724';
    this._commitGIT = '9c3777c2137edff54b7ec00f17147598e0595439';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}