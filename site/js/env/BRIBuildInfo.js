'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-15 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1487';
    this._commitGIT = '8e08303cdba7c01bb0c71d37d43b4946d1a96388';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}