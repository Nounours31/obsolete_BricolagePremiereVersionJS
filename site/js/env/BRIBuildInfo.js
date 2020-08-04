'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-04 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1688';
    this._commitGIT = '186cf860fe86cba4c6407b997a0be93436549ec9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}