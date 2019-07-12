'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 12:43:06';
    this._versionBuild = 'jenkins-Bricolage-122';
    this._commitGIT = '1fffa30ee09afd934808d959e5e1b71cca87e783';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}