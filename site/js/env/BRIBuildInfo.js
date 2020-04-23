'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-23 16:00:38';
    this._versionBuild = 'jenkins-Bricolage-1277';
    this._commitGIT = '4a71a311d8e672720626aae989f9ae40f47c30e0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}