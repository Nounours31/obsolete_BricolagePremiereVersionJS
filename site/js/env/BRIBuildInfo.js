'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-23 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1276';
    this._commitGIT = '1020da74c67bfcd54753225527db4358eba5b916';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}