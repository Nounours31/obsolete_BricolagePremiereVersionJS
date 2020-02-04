'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-04 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-960';
    this._commitGIT = '1d77aa5bc34b0bad29ef80e712b8abdf55dd10e7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}