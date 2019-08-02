'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-02 08:00:14';
    this._versionBuild = 'jenkins-Bricolage-215';
    this._commitGIT = '96adafa2b672a019cf12661903be95b5d854ed55';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}