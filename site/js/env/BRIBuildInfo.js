'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-23 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1035';
    this._commitGIT = '270bcdae9970a77d6dda76fed0a770acc13202ca';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}