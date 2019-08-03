'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-03 12:00:12';
    this._versionBuild = 'jenkins-Bricolage-220';
    this._commitGIT = '78103b18f60c83cc2f0e323c8abbbfbd4b818b5f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}