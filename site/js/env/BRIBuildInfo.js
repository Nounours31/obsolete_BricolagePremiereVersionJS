'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-29 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-694';
    this._commitGIT = 'ad3adde324c43a025c8c5223b35d942779eaf5b2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}