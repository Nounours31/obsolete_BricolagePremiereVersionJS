'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-18 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1619';
    this._commitGIT = '79a279879843354ebb80073dc92de4832d389001';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}