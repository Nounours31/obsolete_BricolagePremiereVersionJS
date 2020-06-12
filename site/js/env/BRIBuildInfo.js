'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-12 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1478';
    this._commitGIT = '9593ec24eb40521dea6a7b9a25aeab6b69839655';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}