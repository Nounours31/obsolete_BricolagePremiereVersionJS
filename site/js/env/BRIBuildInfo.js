'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-07 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-2069';
    this._commitGIT = 'e87ea5a47748f3043564a9b7f89a7e729342ac0b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}