'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-25 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-1159';
    this._commitGIT = 'aa8ca869c378fac47cd6ab32b3845835a950462e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}