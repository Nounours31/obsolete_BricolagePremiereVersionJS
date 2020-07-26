'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-26 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1652';
    this._commitGIT = '09772600e5c9e2fcc2e071b663c9009d640079ad';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}