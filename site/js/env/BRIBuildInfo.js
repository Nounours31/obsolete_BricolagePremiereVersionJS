'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-17 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-1254';
    this._commitGIT = '4439db8bcec70154c9dd5d4b1a8aad3697926d22';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}