'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-05 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-841';
    this._commitGIT = '52e609d6771a24f6f52bf9955a09506e19d8e384';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}