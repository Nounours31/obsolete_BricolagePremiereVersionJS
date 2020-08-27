'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-27 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1780';
    this._commitGIT = '1778a3a9a751b901376a602fe64de294badc4d84';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}