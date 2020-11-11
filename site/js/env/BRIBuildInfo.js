'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-11 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-2085';
    this._commitGIT = 'd7bdefc442502e0c7abe7ceac75e9dde882cdbaa';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}