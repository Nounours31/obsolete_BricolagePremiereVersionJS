'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-02 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1681';
    this._commitGIT = 'd58770b6280771811b0b77433d5b21d4c50aa796';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}