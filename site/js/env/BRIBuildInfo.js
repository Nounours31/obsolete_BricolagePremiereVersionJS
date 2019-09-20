'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-20 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-412';
    this._commitGIT = '906070f521c77315a98fb7f35965030710603678';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}