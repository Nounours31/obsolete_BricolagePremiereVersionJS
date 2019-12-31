'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-31 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-821';
    this._commitGIT = '9e12a967527896c6c86130d6f740d9927c1135c6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}