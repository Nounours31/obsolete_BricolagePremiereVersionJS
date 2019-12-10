'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-10 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-736';
    this._commitGIT = '5af525b3f0db3ea388404091ca438402d8210a7a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}