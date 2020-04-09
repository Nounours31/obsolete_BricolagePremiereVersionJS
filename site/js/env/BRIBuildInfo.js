'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-09 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-1220';
    this._commitGIT = '748d826772c68ed42510927f11ecd797656f690d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}