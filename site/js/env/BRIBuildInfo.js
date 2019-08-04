'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-04 12:00:13';
    this._versionBuild = 'jenkins-Bricolage-224';
    this._commitGIT = '1aab19df759bfbbcedbd5595c8f7833acb6c0b6a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}