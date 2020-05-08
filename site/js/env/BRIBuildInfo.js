'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-08 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1335';
    this._commitGIT = '89f0b5327e1ba50ef119475d9291780384da452c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}