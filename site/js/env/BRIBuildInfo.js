'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-20 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1025';
    this._commitGIT = '7b35f1dd5649381b4ab77f88116cdbf4f7b3ed92';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}