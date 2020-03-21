'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-21 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-1143';
    this._commitGIT = '3e1f6759a730d1fcb8e82f958f5cd57ce83e5724';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}