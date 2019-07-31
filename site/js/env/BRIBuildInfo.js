'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-31 16:00:18';
    this._versionBuild = 'jenkins-Bricolage-209';
    this._commitGIT = 'e8c60f22df0b24647c689952bd1900fa46f95450';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}